const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");

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
  async signin(parent, { email, password }, ctx) {
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
  logout(parent, args, ctx) {
    ctx.res.clearCookie("token");
    return { message: "Goodbye" };
  },
  async requestReset(parent, { email }, ctx) {
    // 1. Check if this is a real user
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // 2. Set a reset token and expiry on that user
    const randowBytesAsPromise = promisify(randomBytes);
    const resetToken = (await randowBytesAsPromise(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 36000000; // 1 hour from now

    const response = await ctx.db.mutation.updateUser({
      where: { email },
      data: {
        resetToken,
        resetTokenExpiry,
      },
    });

    return { message: "Check your Email!" };
    // 3. Email them that reset token
  },
  async resetPassword(parent, { password, confirmPassword, resetToken }, ctx) {
    // 1. Check if the passwords match
    if (password !== confirmPassword) {
      throw new Error(`Yo Passwords dont match`);
    }
    // 2. Chick if it's it a legit reset token and not expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: resetToken,
        resetTokenExpiry_gte: Date.now() - 36000000,
      },
    });

    if (!user) {
      throw new Error(`This token is either invalid or expired!`);
    }

    // 4. Hash their new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Save the new password to the user and remove old resetToken fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    // 6. Generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);

    // 7. Set the JWT Cookie
    ctx.res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    });

    // 8. return the new user
    return updatedUser;
  },
};

module.exports = Mutation;
