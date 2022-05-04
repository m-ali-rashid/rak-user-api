// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  let rawdata = fs.readFileSync("db.json");
  let student = JSON.parse(rawdata);
  res.send(student);
  console.log(student);
});

app.post("/users", function (req, res) {
  // console.log(req.body);
  // let temp = req.body;
  // res.send({ temp, msg: "User Added, Database Updated successfully" });
  // return;
  let rawdata = fs.readFileSync("db.json");
  let users = JSON.parse(rawdata);
  console.log(users);
  users.unshift(req.body);
  console.log(users);

  let data = JSON.stringify(users);
  fs.writeFileSync("db.json", data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
      res.send({ users, msg: "User Added, Database Updated successfully" });
    }
  });
});

app.listen(port, () => console.log("listening"));

// server.use(middlewares);
// server.use(router);
// server.listen(port);
