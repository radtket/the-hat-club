const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils");
const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  me(parent, args, { req, db }, info) {
    // check if there is a current user ID
    if (!req.userId) {
      return null;
    }

    return db.query.user(
      {
        where: {
          id: req.userId,
        },
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.req.userId) {
      throw new Error("You must be logged in!");
    }

    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.req.user, ["ADMIN", "PERMISSIONUPDATE"]);

    // 3. if they do, query all the users!
    return ctx.db.query.users({}, info);
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
