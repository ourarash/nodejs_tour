let myLib = require("../lib/hello_world.js");

function main() {
  let myVar = 1;
  console.log('myVar: ', myVar);
  myVar = "This is a string now."
  console.log('myVar: ', myVar);
  myVar = true;
  console.log('myVar: ', myVar);
}

main();
