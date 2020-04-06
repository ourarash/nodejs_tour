const express = require("express");
let app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

let server = app.listen(3000, function() {
  console.log(`Listening on port: 3000`);
});
