const expect = require("chai").expect;
const myLib = require("../../lib/find_max.js");


describe("FindMax Test with Chai", () => {
  it("should return max", () => {
    let inputs = [1, 5, -9, 150, 3, 55, 67];
    expect(myLib.FindMax(inputs)).to.equal(150);
  });
});