global.fetch = require("node-fetch");
const cc = require("cryptocompare");

async function main() {
  let data = await cc.price("BTC", "USD");
  console.log(data);
  
}

main();
