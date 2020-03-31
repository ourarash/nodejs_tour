const assert = require("assert");
const myLib = require("../lib/find_max.js");
describe("An always failing test.", () => {
  it("should fail", () => {
    throw new Error("Bad test!");
  });
});

describe("An always passing test.", () => {
  it("should pass", () => {});
});
// Testing FindMax
describe("FindMax Test with Mocha", () => {
  it("should return max", () => {
    let inputs = [1, 5, -9, 150, 3, 55, 67];
    let myMax = myLib.FindMax(inputs);
    assert.equal(myMax, 151);
  });
});

describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe("An always failing test.", () => {
    it("should fail", () => {
      throw new Error("Bad test!");
    });
  });
});
