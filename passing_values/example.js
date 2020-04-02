
let p1 = {
  firstName: "Ari",
  lastName: "Saif",

  number_1: 18
}
console.log('p1: ', p1);
console.log('p1: ', JSON.stringify(p1, null, 2));

// let p2 = p1;

let p2 = JSON.parse(JSON.stringify(p1));

// p2.firstName = "Tommy";

// console.log('p1: ', p1);


// main();


// let a = 10;
// let b = a;

// b++;

// console.log('a: ', a);
