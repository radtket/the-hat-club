const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
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
