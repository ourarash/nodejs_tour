// Promise
let timeouts = [1000, 2000, 3000, 4000, 5000];

const delay = function(t) {
  return new Promise(resolve => setTimeout(resolve, t));
};

async function chain() {
  for (let t of timeouts) {
    console.log("Waiting for " + t + " ms...");
    await delay(t);
  }
}

chain();
