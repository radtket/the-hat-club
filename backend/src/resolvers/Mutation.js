const Mutation = {
  async createItem(
    parent,
    args,
    {
      db: { mutation },
    },
    info
  ) {
    const item = await mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    return item;
  },
  async updateItem(
    parent,
    args,
    {
      db: { mutation },
    },
    info
  ) {
    // first take a copy of the updates
    const updates = { ...args };

    // remove id from the updates
    delete updates.id;

    // run the update method
    const item = await mutation.updateItem(
      {
        data: {
          ...updates,
        },
        where: {
          id: args.id,
        },
      },
      info
    );
    return item;
  },

  async deleteItem(
    parent,
    { id },
    {
      db: { query, mutation },
    },
    info
  ) {
    // 1. find the item
    const item = await query.item(
      { where: { id } },
      `{
      id
      title
    }`
    );
    // 2.check they own that item, or have the permisions
    // TODO:
    // 3. Delete it
    return mutation.deleteItem({ where: { id } }, info);
  },
};

module.exports = Mutation;
