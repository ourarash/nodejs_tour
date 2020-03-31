let myLib = require("../lib/find_max.js");
var babar = require("babar");
//-----------------------------------------------------------------------------
/**
 *
 * @param {Number} n
 */
function fib(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
//-----------------------------------------------------------------------------


main();
