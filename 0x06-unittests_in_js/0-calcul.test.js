const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("smoke test", function() {
  it("checks equality", function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
});

