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
      process.env.APP_SECRET
    );

    // We set the jwt as a cookie on the response
    ctx.res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    });

    // return user to the browser
    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    // 1. Check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });

    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }

    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error(`Invalid password!`);
    }

    // 3. generate the JWT
    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.APP_SECRET
    );

    // 4. Set the cookie with the token
    ctx.res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    });

    // 5. Return the user
    return user;
  },
  logout(parent, args, ctx, info) {
    ctx.res.clearCookie("token");
    return { message: "Goodbye" };
  },
};

module.exports = Mutation;
