let myLib = require("../lib/hello_world.js");

function makeFullName(firstName) {
  try {
    let fullName = firstName + lastName;
    console.log("fullName: ", fullName);
  } catch (error) {
    console.log("error: ", error);
  }
}

function main() {
  makeFullName("Ari");
  console.log("End of main");
}

main();
