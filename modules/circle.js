function area(r) {
  return Math.PI * r ** 2;
}

function circumference(r) {
  return 2 * Math.PI * r;
}

const myConstant = 56;

// Export them here
module.exports = {
  area: area,
  circumference: circumference,
  myConstant: myConstant
};
