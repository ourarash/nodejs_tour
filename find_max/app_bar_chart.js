let myLib = require("../lib/find_max.js");
var babar = require("babar");

function main() {
  let myArray = [1, 5, 3, 2, -5, 25, 32];
  let data = [];
  for (let i = 0; i < myArray.length; i++) {
    data.push([i, myArray[i]]);
  }
  let max = myLib.FindMax(myArray);
  console.log("max: ", JSON.stringify(max));

  console.log(
    babar(data, {
      color: "green",
      width: 40,
      height: 10,
    })
  );
}

main();
