const express = require("express");
let app = express();

app.get("/", function(req, res) {
  res.send("Hello World. Welcome to EE599!");
});

let server = app.listen(3000, function() {
  console.log(`Listening on port: 3000`);
});
