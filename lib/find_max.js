//-----------------------------------------------------------------------------
/**
 * Returns the max value of an array
 * @param {Array} inputs
 */
function FindMax(inputs) {
  let result = Number.MIN_SAFE_INTEGER;
  for (let n of inputs) {
    if (n > result) {
      result = n;
    }
  }
  return result;
}
//-----------------------------------------------------------------------------
module.exports = {
  FindMax: FindMax,
};
