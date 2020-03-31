let work = true;
setTimeout(() => {
  console.log("Time is up!");
  work = false;
}, 4000);

let count = 0;
setInterval(() => {
  if (work) {
    if (count++ % 2) {
      console.log("Tick");
    }else {
      console.log("Tock");
    }
  }
}, 100);
