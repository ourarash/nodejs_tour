// Promise
const myPromise = function() {
  return new Promise((resolve, reject) => {
    let randomValue = Math.random();
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
    return myPromise();
  })
  .catch(e => {
    console.log("error: ", e);
  });
