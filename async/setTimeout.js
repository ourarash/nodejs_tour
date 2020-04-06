let work = true;
setTimeout(function() {
  console.log("Time is up!");
  work = false;
}, 5000);

for (let index = 0; index < 100000; index++) {
  if (!work) {
    break;
  }
  console.log("Working on ", index);
}
