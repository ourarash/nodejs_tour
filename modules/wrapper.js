(function(exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
  function area(r) {
    return Math.PI * r ** 2;
  }

  function circumference(r) {
    return 2 * Math.PI * r;
  }

  // Export them here
  module.exports = {
    area: area,
    circumference: circumference
  };
});
