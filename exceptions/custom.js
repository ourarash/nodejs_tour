let myLib = require("../lib/hello_world.js");

let quarantine = true;
function goToTheBeach() {
  if (quarantine) {
    throw "You should be at home now!";
  }
}

function main() {
  try {
    goToTheBeach();
  } catch (error) {
    console.log("Error: ", error);
    console.log("Let's learn NodeJS instead!");
  }
  console.log("Stay safe!");
}

main();
