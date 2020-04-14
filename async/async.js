// Promise
const myPromise = function() {
  return new Promise((resolve, reject) => {
    let randomValue = Math.random();
    resolve(randomValue);
  });
};

async function chain() {
  console.log("We are in chain.");
  let d;

  d = await myPromise();

  console.log("d1: ", d);

  d = await myPromise();

  console.log("d2: ", d);
}

async function main() {
  await chain();
  console.log("This is the end of my program.");
}

main();


function asyncFunction() {
  
  let a = await myPromise1();
  let b = await myPromise1();
  let c = a+b;

  return c;
}


