// Promise
const myPromise = function() {
  return new Promise((resolve, reject) => {
    let randomValue = Math.random();
    resolve(randomValue);
  });
};

async function chain(){
  let d;
  d = await myPromise();
  console.log('d: ', d);
  d = await myPromise();
  console.log('d: ', d);
}