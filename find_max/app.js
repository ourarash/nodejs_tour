let myLib = require("../lib/find_max");

function main() {
  let myArray = [1, 5, 3, 2, -5, 255, 32];
  let max = myLib.FindMax(myArray);
  console.log("max: ", JSON.stringify(max));
}

main();
