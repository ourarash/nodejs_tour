// Promise
const myPromise = function() {
  return new Promise((resolve, reject) => {
    let randomValue = Math.random();
    // Delay 10000;
    resolve(randomValue);
  });
};

myPromise()
  .then(response => {
    console.log("response: ", response);
    return myPromise();
  })
  .then(response => {
    console.log("response: ", response);
    return myPromise();
  })
  .then(response => {
    console.log("response: ", response);
  })
  .catch(e => {
    console.log("error: ", e);
  });

console.log("I'm outside.");
