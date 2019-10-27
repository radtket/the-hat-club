const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const server = require("./server");
const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

app.use(cookieParser());
app.use((req, res, next) => {
  // checks for user in cookies and adds userId to the requests
  const { token } = req.cookies;

  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
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
