const express = require("express");
let app = express();
// var router = express.Router();


app.route("/Node").get(function(req, res) {
  res.send("Welcome to NodeJS!");
});
app.route("/CPP").get(function(req, res) {
  res.send("Welcome to C++!");
});
app.get("/", function(req, res) {
  res.send("Welcome to EE599!");
});

let server = app.listen(3000, function() {
  console.log(`Listening on port: 3000`);
});
