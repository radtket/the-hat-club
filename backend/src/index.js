require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
const port = process.env.PORT || 4444;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/greeting", (req, res) => {
  const { name } = req.query;

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name || "World"}!` }));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
