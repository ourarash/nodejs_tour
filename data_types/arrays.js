function main() {
  let myArray = [];
  for (let i = 0; i < 10; i++) {
    myArray.push(i);
  }
  console.log("myArray: ", JSON.stringify(myArray));

  myArray.pop();

  console.log("myArray: ", JSON.stringify(myArray));

  let myArrayMix = [1, 2, "a", 133n **2n, true, false];
  console.log("myArrayMix: ", myArrayMix);
}

main();
