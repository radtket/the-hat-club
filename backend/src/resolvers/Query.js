const { forwardTo } = require("prisma-binding");
const { hasPermission, isLoggedIn } = require("../utils");
const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  me(
    parent,
    args,
    {
      req,
      db: { query },
    },
    info
  ) {
    // check if there is a current user ID
    if (!req.userId) {
      return null;
    }

    return query.user(
      {
        where: {
          id: req.userId,
        },
      },
      info
    );
  },
  async users(
    parent,
    args,
    {
      req,
      db: { query },
    },
    info
  ) {
    // 1. Check if they are logged in
    isLoggedIn(req);

    // 2. Check if the user has the permissions to query all the users
    hasPermission(req.user, ["ADMIN", "PERMISSIONUPDATE"]);

    // 3. if they do, query all the users!
    return query.users({}, info);
  },
  async order(
    parent,
    { id },
    {
      req,
      db: { query },
    },
    info
  ) {
    // 1. Make sure they are logged in
    isLoggedIn(req);

    // 2. Query the current order
    const order = await query.order(
      {
        where: { id },
      },
      info
    );

    // 3. Check if the have the permissions to see this order
    const ownsOrder = order.user.id === req.userId;
    const hasPermissionToSeeOrder = req.user.permissions.includes("ADMIN");

    if (!ownsOrder || !hasPermissionToSeeOrder) {
      throw new Error("You are not allowed to see this");
    }

    // 4. Return the order
    return order;
  },
  async orders(
    parent,
    args,
    {
      req,
      db: { query },
    },
    info
  ) {
    isLoggedIn(req);
    const { userId } = req;

    return query.orders(
      {
        where: {
          user: { id: userId },
        },
      },
      info
    );
  },
  // async items(
  //   parent,
  //   args,
  //   {
  //     db: { query },
  //   }
  // ) {
  //   const items = await query.items();
  //   return items;
  // },
};

module.exports = Query;
