const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  me(parent, args, { request, db }, info) {
    // check if there is a current user ID
    if (!request.userId) {
      return null;
    }

    return db.query.user(
      {
        where: {
          id: request.userId,
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
