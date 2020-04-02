"use strict";

const express = require("express");
const app = express();
app.use(express.static("static"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const suggestions = require("./static/suggestions.json");
let port = 3000;

app.get("/", function(req, res) {
  console.log("req.query: ", JSON.stringify(req.query));
  if (req.query && Object.keys(req.query).length > 0) {
    console.log("I got a query");
    handlePost(req, res, req.query);
  } else {
    console.log("No query");
    res.sendFile(__dirname + "/static/index2.html");
  }
});

app.post("/", handlePost);

app.listen(port, err => {
  console.log(`The magic happens on port: ${port}`);
});
//-----------------------------------------------------------------------------
function handlePost(req, res, query) {
  console.log("req.body: ", JSON.stringify(req.body));

  let categories = [];
  let totalTime;

  if (!query) {
    return;

  } else {
    totalTime = 30 * req.query.hours;
    for (let key of Object.keys(req.query)) {
      if (key.match(/category.*/)) {
        categories.push(req.query[key]);
      }
    }
  }

  let output = {
    categories: categories,
    suggestions: [],
    remainingTime: totalTime,
    totalHours: totalTime
  };

  // console.log("categories: ", JSON.stringify(categories));
  // console.log("suggestions: ", JSON.stringify(suggestions, null, 2));

  for (let c of categories) {
    if (suggestions[c]) {
      for (let s of suggestions[c]) {
        if (output.remainingTime >= s.hours) {
          output.suggestions.push({
            title: s.title,
            url: `<a href=${s.url}\">${s.url}</a>`,
            hours: s.hours,
            category: c
          });
          output.remainingTime -= s.hours;
        }
      }
    }
  }

  output.remainingTime;
  console.log("output: ", JSON.stringify(output));
  res.send("<pre>You like " + JSON.stringify(output, null, 2) + "</pre>");
}
