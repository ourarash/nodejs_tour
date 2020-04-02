let myLib = require("../lib/find_max.js");
var babar = require("babar");
//-----------------------------------------------------------------------------
let usageMap = {};
/**
 *
 * @param {Number} n
 */
function fib(n) {
  if (!usageMap[n]) {
    usageMap[n] = 0;
  }
  usageMap[n]++;
  if (n === 0 || n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

let memo = {};
function fib2(n) {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  if (n === 0 || n === 1) {
    memo[n] = 1;
    return 1;
  }
  memo[n] = fib2(n - 1) + fib2(n - 2);
  return memo[n];
}

//-----------------------------------------------------------------------------
let r = fib2(100);
console.log("r: ", r);
// console.log("usageMap: ", usageMap);
// let a ={};
// console.log('a.b: ', a.b);
