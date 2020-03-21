const expect = require("chai").expect;
const myLib = require("../../lib/hello_world.js");

describe("Hello world test with Chai", () => {
  it("should return hello world", () => {
    expect(myLib.HelloWorld()).to.equal("Hello World!");
  });
});
