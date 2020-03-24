function add(a, b) {
  return a + b;
}

function operate(a, b, f) {
  return f(a, b);
}

let r = operate(5, 6, add);
console.log("r: ", r);

let r2 = operate(5, 6, function add(a, b) {
  return a + b;
});
console.log("r2: ", r2);
