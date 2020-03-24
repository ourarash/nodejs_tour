function add(a, b){
  return a + b;
}

function main(myParameter) {
  if (true) {
    const myConst = 1;

    myConst++; // This is obviously an error!
    let myLet = 1;
    var myVar = 1;
  }
  // myLet DOES have scope here!
  console.log("myVar: ", myVar);

  // myVar doesn't have scope here!
  console.log("myLet: ", myLet);

  // myConst doesn't have scope here!
  console.log("myConst: ", myConst);
}

// functionParameter doesn't have scope here!
console.log("myParameter: ", myParameter);

main();
