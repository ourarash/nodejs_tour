let myLib = require("../lib/hello_world.js");

function main() {
  let msg = myLib.HelloWorld();
  console.log("msg: ", msg);
}

main();
