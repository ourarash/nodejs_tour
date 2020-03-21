const assert = require("assert");
const myLib = require("../../lib/find_max.js");

// Testing FindMax
describe("FindMax Test with Mocha", () => {
  it("should return max", () => {
    let inputs = [1, 5, -9, 150, 3, 55, 67];
    assert.equal(myLib.FindMax(inputs), 150);
  });
});
