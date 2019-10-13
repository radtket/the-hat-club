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
};

module.exports = Mutation;
