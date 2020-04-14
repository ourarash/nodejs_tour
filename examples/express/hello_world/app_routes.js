const express = require("express");
let app = express();

// Everything under Node
app.route("/Node").get(function(req, res) {
  res.send("<h1>Welcome to NodeJS!</h1>");
});

// Everything under CPP
app.route("/CPP").get(function(req, res) {
  res.send("<h1>Welcome to C++!</h1>");
});

// Default route
app.get("/", function(req, res) {
  res.send("Welcome to EE599!");
});

let server = app.listen(3000, function() {
  console.log(`Listening on port: 3000`);
});
