let myLib = require("../lib/find_max.js");
var babar = require("babar");

let usageMap = {};
//-----------------------------------------------------------------------------
/**
 *
 * @param {Number} n
 */
function fib(n) {
  if (usageMap[n] == null) {
    usageMap[n] = 0;
  }
  usageMap[n]++;

  if (n == 0 || n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
//-----------------------------------------------------------------------------
/**
 * Converts a map of number to usage values to an array
 * @param {Object} usageMap
 * @returns {Array}
 */
function convertUsageMapToArray(usageMap) {
  let data = [];
  for (let [key, value] of Object.entries(usageMap)) {
    data.push([key, value]);
  }
  return data;
}
//-----------------------------------------------------------------------------
function main() {
  let fibExample = fib(30);

  console.log("fibExample: ", fibExample);
  console.log("usageMap: ", usageMap);

  let data = convertUsageMapToArray(usageMap);

  console.log(
    babar(data, {
      color: "green",
      width: 90,
      height: 10,
    })
  );
}

main();
