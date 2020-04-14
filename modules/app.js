
const circle = require("./circle.js");
const globals = require("./globals.js");
globals.myGlobal = 1;
let area = circle.area(4);

circle._internalVariable;

console.log(`The area of a circle of radius 4 is ${area}`);
