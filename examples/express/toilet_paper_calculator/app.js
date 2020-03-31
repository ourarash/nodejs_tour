"use strict";

const express = require("express");
const app = express();
app.use(express.static("static"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/static/index.html");
});

app.post("/", function(req, res) {
  let times_per_day = req.body.times_per_day;
  let how_many_days = req.body.how_many_days;
  let average_paper_per_trip = 5;
  let papers_per_roll = 200;
  console.log(
    "times_per_day: ",
    times_per_day,
    "how_many_days: ",
    how_many_days
  );
  res.send(
    "You only need : " +
      (times_per_day * how_many_days * average_paper_per_trip) / papers_per_roll +
      " rolls my friend!"
  );
  console.log(req.body);
});

var port = 3000;

app.listen(port, err => {
  console.log(`The magic happens on port: ${port}`);
});
