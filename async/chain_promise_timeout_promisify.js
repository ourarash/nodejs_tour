let timeouts = [1000, 2000, 3000, 4000, 5000];
let i = 0;
const { promisify } = require("util");
const delay = promisify(setTimeout);

delay(timeouts[i])
  .then(() => {
    console.log(`timeouts[i]=${timeouts[i]} is over`);
    i++;
    return delay(timeouts[i]);
  })
  .then(() => {
    console.log(`timeouts[i]=${timeouts[i]} is over`);
    i++;
    return delay(timeouts[i]);
  })
  .then(() => {
    console.log(`timeouts[i]=${timeouts[i]} is over`);
    i++;
    return delay(timeouts[i]);
  })
  .catch(e => {
    console.log("error: ", e);
  });
