/**
 * Pushes a value into array
 * @param {Array} array 
 * @param {String|Number} i 
 */
function arrayPush(array, i){
  array.push(i)
}

function main() {
  let array = [];
  arrayPush(array, 10)
  console.log('array: ', array);
}

main();

