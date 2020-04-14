const globals = require("./globals.js");

function area(r) {
  console.log('globals.: ', globals.myGlobal);
  return Math.PI * r ** 2;
  
}


function circumference(r) {
  return 2 * Math.PI * r;
}

function _internalFunction(r){
  return 1;
}

const myConstant = 56;
let _internalVariable=5;

// Export them here
module.exports = {
  area: area,
  circumference: circumference,
  myConstant: myConstant
};
