//1. Import coingecko-api
const CoinGecko = require("coingecko-api");

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
async function main() {
  try {
    let data = await CoinGeckoClient.coins.fetch("bitcoin", {});
    // console.log('data: ', JSON.stringify(data, null, 2));
    console.log(
      "data.data.market_data.current_price.usd: ",
      data.data.market_data.current_price.usd
    );
  } catch (error) {
    console.log("error: ", error);
  }
}

main();
