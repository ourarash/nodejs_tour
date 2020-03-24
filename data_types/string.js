function main() {
  let thisYear = 2020;
  let myString = "Hello world " + thisYear.toString();
  let myString2 = 'Hello world '+ thisYear;
  let myString3 = `Hello world ${thisYear}`;

  console.log('myString: ', myString);
  console.log('myString2: ', myString2);
  console.log('myString3: ', myString3);

  // Indexing characters
  let c = myString3.charAt(1);
  console.log('c.length: ', c.length);
  console.log('c.toUpperCase(): ', c.toUpperCase());
}

main();
