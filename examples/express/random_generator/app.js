"use strict";

var express = require("express");
var app = express();
app.use(express.static("static"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/static/index.html");
});

function checkInput(input) {
  var message = "";
  if (input < 0) {
    message = "User Error!  User Error! Please Try Again!";
  } else {
    message = "Hi, my name is Ivy and I want to give you the number " + input;
  }
  return message;
}

app.post("/", function(req, res) {
  let max = req.body.max_value;
  console.log("max: ", max);
  let rand_number = getRandomInt(max);
  res.send("Here you go: " + rand_number);
  console.log(req.body);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var port = 3000;

app.listen(port, err => {
  console.log(`The magic happens on port: ${port}`);
});
