require("dotenv").config();
const createServer = require("./createServer");

const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  ({ port }) => {
    console.log(`Listening on port ${port}`);
  }
);
