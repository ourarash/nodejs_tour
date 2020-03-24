const assert = require("assert");
const myLib = require("../../lib/hello_world.js");

// Testing HelloWorld
describe("Hello world test with Mocha", () => {
  it("should return hello world", () => {
    assert.equal(myLib.HelloWorld(), "Hello World!");
  });
});