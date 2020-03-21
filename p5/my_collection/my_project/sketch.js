// Instructions for Intellisense:
// - npm install --save @types/p5
// - Keep this file open: node_modules/@types/p5/global.d.ts
// - Leave the line below as is:
/// <reference path="../node_modules/@types/p5/global.d.ts" />

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  let msg = "Hello world";
  console.log("msg: ", msg);
  textSize(32);
  fill(0, 0, 0);
  text(msg, width / 4, height / 10);
}