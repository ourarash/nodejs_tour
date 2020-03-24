function add(a, b) {
  return a + b;
}

let myAdd = add;
let r = myAdd(1,2);
console.log("r: ", r);

// Valid, but won't be hoisted
let myAdd = function(a,b){
  return a + b;
}
