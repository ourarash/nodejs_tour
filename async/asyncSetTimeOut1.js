// Promise
let timeouts = [1000, 2000, 3000, 4000, 5000];

const delay = function(t) {
  return new Promise(resolve => setTimeout(resolve, t));
};

async function chain() {
  let i = 0;
  console.log("Waiting for " + timeouts[i] + " ms...");
  await delay(timeouts[i]);
  i++;
  console.log("Waiting for " + timeouts[i] + " ms...");
  await delay(timeouts[i]);
  i++;
  console.log("Waiting for " + timeouts[i] + " ms...");
  await delay(timeouts[i]);
  i++;
}

chain();
