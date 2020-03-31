let work = true;
setTimeout(() => {
  console.log("Time is up!");
  work = false;
}, 1000);

for (let index = 0; index < 100000; index++) {
  if (!work) {
    break;
  }
  console.log("Working on ", index);
}
