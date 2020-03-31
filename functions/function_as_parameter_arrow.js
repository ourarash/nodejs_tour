function operate(a, b, f) {
  return f(a, b);
}

let r2 = operate(5, 6, (a, b) => a + b);


console.log("r2: ", r2);
