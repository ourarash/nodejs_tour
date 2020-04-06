const log = require("log-with-statusbar")();
const spinners = log.getSpinners();

function main() {
  const students = require("./data.json");

  let maxRandValue = students.length;
  let i = 0;
  setInterval(() => {
    let frames = spinners.weather.frames;

    let randomNumber = Math.floor(Math.random() * maxRandValue);
    log("Finding the lucky student...");

    log.setStatusBarText([
      frames[i % frames.length].toString() +
        ` Lucky student number ${randomNumber}: ` +
        JSON.stringify(students[randomNumber].name)
    ]);
    i++;
  }, 300);
}

main();
