const expect = require("chai").expect;
const myLib = require("../lib/find_max.js");

describe("Should provide demo", () => {
  it("should test euqality", () => {
    expect(1).to.be.equal(1);
    expect(2).to.not.be.equal(1);
    expect(2).to.be.greaterThan(1);

    expect(3).to.not.be.equal(4);
    expect(2).to.be.a("Number");

    expect([]).to.be.an("array").that.is.empty;
    expect([3, 2, 1])
      .to.be.an("array")
      .that.has.members([1, 2, 3]);
    expect([3, 2, 1])
      .to.be.an("array")
      .that.has.not.any.members([4, 5]);
    expect({ c: 3, a: 5 }).to.not.have.any.keys("a", "b");
  });  
});
