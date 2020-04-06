const fs = require("fs");

function myCallback(err, data) {
  console.log("We are in myCallback function");

  if (err) {
    return console.error(err);
  }

  console.log(data.toString());
}

fs.readFile("./input.txt", myCallback);

console.log("Program Ended");
console.log("Program Ended 2");
console.log("Program Ended 3");
