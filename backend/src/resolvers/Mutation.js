const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { transport, makeANiceEmail } = require("../mail");
const {
  hasPermission,
  calcTotalPrice,
  stripe,
  isLoggedIn,
} = require("../utils");
const { forwardTo } = require("prisma-binding");

const Mutation = {
  updateCartItem: forwardTo("db"),
  async createItem(
    parent,
    args,
    {
      req,
      db: { mutation },
    },
    info
  ) {
    isLoggedIn(req);

    const item = await mutation.createItem(
      {
        data: {
          // This is how to create a relationship between the Item and the User
          user: {
            connect: {
              id: req.userId,
            },
          },
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
      req: { user, userId },
      db: { query, mutation },
    },
    info
  ) {
    // 1. find the item
    const item = await query.item({ where: { id } }, `{ id title user { id }}`);

    // 2.check they own that item, or have the permisions
    const ownsItem = item.user.id === userId;
    const hasPermissions = user.permissions.some(permission =>
      ["ADMIN", "ITEMDELETE"].includes(permission)
    );

    if (!ownsItem && !hasPermissions) {
      throw new Error("You don't have permission to do that!");
    }

    // 3. Delete it
    return mutation.deleteItem({ where: { id } }, info);
  },
  async signup(
    parent,
    args,
    {
      res,
      db: { mutation },
    },
    info
  ) {
    const data = { ...args };
    data.email = data.email.toLowerCase();
    // hash their password
    const password = await bcrypt.hash(data.password, 10);
    // create the user in the database
    const user = await mutation.createUser(
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
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    });

    // return user to the browser
    return user;
  },
  async signin(
    parent,
    { email, password },
    {
      res,
      db: { query },
    }
  ) {
    // 1. Check if there is a user with that email
    const user = await query.user({ where: { email } });

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
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    });

    // 5. Return the user
    return user;
  },
  logout(parent, args, { res }) {
    res.clearCookie("token");
    return { message: "Goodbye" };
  },
  async requestReset(
    parent,
    { email },
    {
      db: { query, mutation },
    }
  ) {
    // 1. Check if this is a real user
    const user = await query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // 2. Set a reset token and expiry on that user
    const randowBytesAsPromise = promisify(randomBytes);
    const resetToken = (await randowBytesAsPromise(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 36000000; // 1 hour from now

    const response = await mutation.updateUser({
      where: { email },
      data: {
        resetToken,
        resetTokenExpiry,
      },
    });

    // 3. Email them that reset token
    const mailResponse = await transport.sendMail({
      from: "taylorradtke@gmail.com",
      to: email,
      subject: "Your Password Reset Token",
      html: makeANiceEmail(`Your Password Reset Token is here!
      \n\n
      <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click Here to Reset</a>`),
    });

    console.log({ mailResponse });

    // 4. Return the message
    return { message: "Check your Email!" };
  },
  async resetPassword(
    parent,
    { password, confirmPassword, resetToken },
    {
      res,
      db: { query, mutation },
    }
  ) {
    // 1. Check if the passwords match
    if (password !== confirmPassword) {
      throw new Error(`Yo Passwords dont match`);
    }
    // 2. Chick if it's it a legit reset token and not expired
    const [user] = await query.users({
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
    const updatedUser = await mutation.updateUser({
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
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    });

    // 8. return the new user
    return updatedUser;
  },
  async updatePermissions(
    parent,
    { permissions, userId },
    {
      req,
      db: { query, mutation },
    },
    info
  ) {
    // 1. Check if they are logged in
    isLoggedIn(req);

    // 2. Query the current user
    const currentUser = await query.user(
      {
        where: {
          id: req.userId,
        },
      },
      info
    );

    // 3. Check if they have permissions to do this
    hasPermission(currentUser, ["ADMIN", "PERMISSIONUPDATE"]);

    // 4. Update the permissions
    return mutation.updateUser(
      {
        data: {
          permissions: {
            set: permissions,
          },
        },
        where: {
          id: userId,
        },
      },
      info
    );
  },
  async addToCart(
    parent,
    { id },
    {
      req,
      db: { mutation, query },
    },
    info
  ) {
    // 1. Make sure they are signed in
    isLoggedIn(req);

    const { userId } = req;
    // 2. Query the users current cart
    const [existingCartItem] = await query.cartItems({
      where: {
        user: { id: userId },
        item: { id },
      },
    });

    // 3. Check if that item is already in their cart and increment by 1 if it is
    if (existingCartItem) {
      return mutation.updateCartItem(
        {
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + 1 },
        },
        info
      );
    }

    // 4. If its not, create a fresh CartItem for that user!
    return mutation.createCartItem(
      {
        data: {
          user: {
            connect: { id: userId },
          },
          item: {
            connect: { id },
          },
        },
      },
      info
    );
  },
  async removeFromCart(
    parent,
    { id },
    {
      req,
      db: { mutation, query },
    },
    info
  ) {
    // 1. Find the cart item
    const cartItem = await query.cartItem(
      {
        where: {
          id,
        },
      },
      `{ id, user { id }}`
    );

    // 1.5 Make sure we found an item
    if (!cartItem) {
      throw new Error("No CartItem Found!");
    }

    // 2. Make sure they own that cart item
    if (cartItem.user.id !== req.userId) {
      throw new Error("Hey! You can't do that!!");
    }

    // 3. Delete that cart item
    return mutation.deleteCartItem(
      {
        where: { id },
      },
      info
    );
  },
  async createOrder(
    parent,
    { token },
    {
      req,
      db: { query, mutation },
    }
  ) {
    // 1. Query the current user and make sure they are signed in
    isLoggedIn(req);
    const { userId } = req;

    const { cart } = await query.user(
      {
        where: {
          id: userId,
        },
      },
      `{
        id
        name
        email
        cart {
          id
          quantity
          item {
            title
            price
            id
            description
            image
          }
        }
      }`
    );

    // 2. recalculate the total for the price
    const amount = calcTotalPrice(cart);
    console.log(`going to charge for total of ${amount}`);

    // 3. Create the stripe charge (turn token into $$$)
    const charge = await stripe.charges.create({
      amount,
      currency: "USD",
      source: token,
    });

    // 4. Convert the CartItems to OrderItems
    const orderItems = cart.map(
      ({ item: { description, image, price, title }, quantity }) => {
        // Return New: OrderItem
        return {
          title,
          description,
          price,
          image,
          quantity,
          user: {
            connect: {
              id: userId,
            },
          },
        };
      }
    );

    // 5. create the Order
    const order = mutation.createOrder({
      data: {
        total: charge.amount,
        charge: charge.id,
        items: {
          create: orderItems,
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    // 6. Clean up - clear the users cart, delete cartItems
    const cartItemIds = cart.map(item => item.id);

    await mutation.deleteManyCartItems({
      where: {
        id_in: cartItemIds,
      },
    });

    // 7. Return the Order to the client
    return order;
  },
};

module.exports = Mutation;
