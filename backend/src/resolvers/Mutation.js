const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  async signup(parent, args, ctx, info) {
    const data = { ...args };
    data.email = data.email.toLowerCase();
    // hash their password
    const password = await bcrypt.hash(data.password, 10);
    // create the user in the database
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...data,
          password,
          permissions: {
            set: ["USER"],
          },
        },
      },
      info
    );
    // Create the JWT toekn for them
    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.PRISMA_SECRET
    );

    // We set the jwt as a cookie on the response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    });

    // return user to the browser
    return user;
  },
};

module.exports = Mutation;
