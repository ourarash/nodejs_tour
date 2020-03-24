function main() {
  let myArray = [];
  for (let i = 0; i < 10; i++) {
    myArray.push(i);
  }
  console.log("myArray: ", JSON.stringify(myArray));

  myArray.pop();

  console.log('myArray: ', JSON.stringify(myArray));
}

main();
