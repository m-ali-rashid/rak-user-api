// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Howdy");
});

app.listen(3000, () => log("listening to 3000"));

// server.use(middlewares);
// server.use(router);
// server.listen(port);
