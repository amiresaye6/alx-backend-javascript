const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('floating point whole numbers', function() {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down b\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down a and b\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down a\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up b\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a and b\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding up a\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', function() {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});