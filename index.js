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
  let rawdata = fs.readFileSync("db.json");
  let users = JSON.parse(rawdata);
  users.unshift(req.body);
  let data = JSON.stringify(users);
  fs.writeFile("db.json", data, (err) => {
    if (err) res.send(err);
    else {
      console.log("File written successfully\n");
      // res.json(req.body);
      res.send(req.body);
    }
  });
});

app.listen(port, () => console.log("listening"));
