const fs = require("fs");

function myCallback(err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
}

fs.readFile("./input.txt", myCallback);

console.log("Program Ended");
