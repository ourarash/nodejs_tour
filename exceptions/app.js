let myLib = require("../lib/hello_world.js");

function makeFullName(firstName) {
  // let fullName = firstName + lastName;
  // console.log("fullName: ", fullName);

  try {
    let fullName = firstName + lastName;
    console.log("fullName: ", fullName);
  } catch (error) {
    // console.log("*****error*****: ", error);
    console.log("Some error happened, but let's move on!");
  }
}

function main() {
  console.log("We are starting the main function.");
  makeFullName("Ari");
  console.log("End of main");
}

main();


