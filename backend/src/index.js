const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");
const server = require("./server");
const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

app.use(cookieParser());

// decode the JWT so we can get the user Id on each request
app.use((req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put the userId onto the req for future requests to access
    req.userId = userId;
  }
  next();
});

// Create a middleware that populates the user on each request
app.use(async (req, res, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) {
    return next();
  }

  const [user] = await db.query.users(
    {
      where: {
        id: req.userId,
      },
    },
    "{ id, permissions, email, name }"
  );

  req.user = user;
  next();
});

server.applyMiddleware({
  app,
  path: "/",
  cors: false, // disables the apollo-server-express cors to allow the cors middleware use
});

app.listen({ port: 4444 }, () => {
  console.log(`🚀 Server ready at http://localhost:4444${server.graphqlPath}`);
});
