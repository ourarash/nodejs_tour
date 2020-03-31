let timeouts = [1000, 2000, 3000, 4000, 5000];
let i = 0;
setTimeout(() => {
  console.log(`timeouts[i]=${timeouts[i]} is over`);
  i++;
  setTimeout(() => {
    console.log(`timeouts[i]=${timeouts[i]} is over`);
    i++;
    setTimeout(() => {
      console.log(`timeouts[i]=${timeouts[i]} is over`);
      i++;
    }, timeouts[i]);
  }, timeouts[i]);
}, timeouts[i]);
