var babar = require("babar");

let usageMap = {};
//-----------------------------------------------------------------------------
/**
 * Finds Fibonacci number n
 * @param {Number} n
 */
function fib(n) {
  let memo = { 0: 1, 1: 1 };
  return fibHelper(n, memo);
}
//-----------------------------------------------------------------------------
/**
 * Helper function to calculate Fibonacci number n using a memo object
 * @param {Number} n
 * @param {Object} memo
 */
function fibHelper(n, memo) {
  if (memo[n] != null) {
    return memo[n];
  }

  if (usageMap[n] == null) {
    usageMap[n] = 0;
  }
  usageMap[n]++;

  if (n == 0 || n == 1) {
    return 1;
  }
  memo[n] = fibHelper(n - 1, memo) + fibHelper(n - 2, memo);
  return memo[n];
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
  let fibExample = fib(100);

  console.log("fibExample: ", fibExample);
  console.log("usageMap: ", usageMap);

  let data = convertUsageMapToArray(usageMap);

  console.log(
    babar(data, {
      color: "green",
      width: 40,
      height: 10
    })
  );
}

main();
