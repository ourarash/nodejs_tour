/**
 * Finds Fibonacci number n
 * @param {Number} n 
 */
function fib(n) {
  let d = [];
  for (let i = 0; i <= n; i++) {
    if (i == 0 || i == 1) {
      d[i] = 1;
    } else {
      d[i] = d[i - 1] + d[i - 2];
    }
  }
  return d[n];
}
//-----------------------------------------------------------------------------
function main() {
  let fibExample = fib(100);
  console.log("fibExample: ", fibExample);
}

main();
