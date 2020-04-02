const axios = require("axios");

async function main() {
  let res = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  );
  console.log('res.data: ', res.data);
  console.log("res.data: ", JSON.stringify(res.data, null, 2));
}

main();