// Promise
const myPromise = function() {
  return new Promise((resolve, reject) => {
    let doesItFail = Math.random();

    // Doesn't fail:
    if (doesItFail > 0.5) {
      resolve("Success!");
    } else {
      const reason = new Error("Failed!");
      reject(reason);
    }
  });
};

myPromise()
  .then(response => {
    console.log("response: ", response);
  })
  .catch(e => {
    console.log("error: ", e);
  });
