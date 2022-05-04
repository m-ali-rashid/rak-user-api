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
// let rawdata = fs.readFileSync('student.json');
// let student = JSON.parse(rawdata);
// console.log(student);

app.get("/", (req, res) => {
  let rawdata = fs.readFileSync("db.json");
  let student = JSON.parse(rawdata);
  res.send(student);
  console.log(student);
});

app.post("/users", function (req, res) {
  console.log(req.body);

  let rawdata = fs.readFileSync("db.json");
  let users = JSON.parse(rawdata);
  console.log(users);
  users.push(req.body);
  console.log(users);

  let data = JSON.stringify(users);
  fs.writeFileSync("db.json", data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("books.txt", "utf8"));
    }
  });
});

app.listen(3000, () => console.log("listening to 3000"));

// server.use(middlewares);
// server.use(router);
// server.listen(port);
