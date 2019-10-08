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
};

module.exports = Mutation;
