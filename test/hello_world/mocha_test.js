const assert = require("assert");
const myLib = require("../lib/my_lib.js");

// Testing HelloWorld
describe("Hello world test with Mocha", () => {
  it("should return hello world", () => {
    assert.equal(myLib.HelloWorld(), "Hello World!");
  });
});