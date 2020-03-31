global.fetch = require("node-fetch");
const cc = require("cryptocompare");
const babar = require("babar");
const moment = require("moment");

async function main() {
  let data = await cc.histoDay("BTC", "USD");
  console.log(data);
  // -> [ { time: 1485388800,
  //        close: 915.65,
  //        high: 917.71,
  //        low: 893.81,
  //        open: 893.97,
  //        volumefrom: 35494.93,
  //        volumeto: 32333344.2 },
  //        ... ]
  let s = [];
  for (let i = 0; i < data.length; i++) {
    console.log(
      'moment(data[i].time).format("MMDD"): ',
      moment(data[i].time*1000).format("MMDD")
    );
    s.push([
      parseInt(moment(data[i].time * 1000).format("MMDD")),
      data[i].close
    ]);
  }
  // console.log(asciichart.plot(s));
  console.log(
    babar(s, {
      color: "green",
      width: 110,
      height: 20
    })
  );
}

main();
