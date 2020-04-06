const express = require("express");
let app = express();

app.get("/", function(req, res) {
  res.send(`
  <p>
    Hello World!
  <p>
  <p>
    This is part of EE599 at <a href="http://usc.edu"> USC </a>
  <p>
  `);
});

let server = app.listen(3000, function() {
  console.log(`Listening on port: 3000`);
});
