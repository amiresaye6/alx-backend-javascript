const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('floating point whole numbers with SUM', function() {
    assert.strictEqual(calculateNumber(1.0, 2.0, 'SUM'), 3);
  });

  it('floating point whole numbers with SUBTRACT', function() {
    assert.strictEqual(calculateNumber(1.0, 2.0, 'SUBTRACT'), -1);
  });

  it('floating point whole numbers with DIVIDE', function() {
    assert.strictEqual(calculateNumber(1.0, 2.0, 'DIVIDE'), 0.5);
  });

  /////////////// SUM /////////////////////////
  it('SUM: rounding down b\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.0, 2.4, 'SUM'), 3);
  });

  it('SUM: rounding down a and b\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.4, 2.4, 'SUM'), 3);
  });

  it('SUM: rounding down a\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.4, 2.0, 'SUM'), 3);
  });

  it('SUM: rounding up b\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(1.0, 2.5, 'SUM'), 4);
  });

  it('SUM: rounding up a and b\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(2.6, 2.5, 'SUM'), 6);
  });

  it('SUM: rounding up a\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(2.6, 2.0, 'SUM'), 5);
  });

  it('SUM: rounding down a and b floating point fractional numbers with trailing 9\'s', function() {
    assert.strictEqual(calculateNumber(2.499999, 3.499999, 'SUM'), 5);
  });

  /////////////// SUBTRACT /////////////////////////
  it('SUBTRACT: rounding down b\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.0, 2.4, 'SUBTRACT'), -1);
  });

  it('SUBTRACT: rounding down a and b\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.4, 2.4, 'SUBTRACT'), -1);
  });

  it('SUBTRACT: rounding down a\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.4, 2.0, 'SUBTRACT'), -1);
  });

  it('SUBTRACT: rounding up b\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(1.0, 2.5, 'SUBTRACT'), -2);
  });

  it('SUBTRACT: rounding up a and b\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(2.6, 2.5, 'SUBTRACT'), 0);
  });

  it('SUBTRACT: rounding up a\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(2.6, 2.0, 'SUBTRACT'), 1);
  });

  it('SUBTRACT: rounding down a and b floating point fractional numbers with trailing 9\'s', function() {
    assert.strictEqual(calculateNumber(2.499999, 3.499999, 'SUBTRACT'), -1);
  });

  /////////////// DIVIDE /////////////////////////
  it('DIVIDE: rounding down b\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.0, 2.4, 'DIVIDE'), 0.5);
  });

  it('DIVIDE: rounding down a and b\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.4, 2.4, 'DIVIDE'), 0.5);
  });

  it('DIVIDE: rounding down a\'s floating point fractional number', function() {
    assert.strictEqual(calculateNumber(1.4, 2.0, 'DIVIDE'), 0.5);
  });

  it('DIVIDE: rounding up b\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(1.0, 2.5, 'DIVIDE'), 1 / 3);
  });

  it('DIVIDE: rounding up a and b\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(2.6, 2.5, 'DIVIDE'), 1);
  });

  it('DIVIDE: rounding up a\'s floating point fractional numbers', function() {
    assert.strictEqual(calculateNumber(2.6, 2.0, 'DIVIDE'), 1.5);
  });

  it('DIVIDE: rounding down a and b floating point fractional numbers with trailing 9\'s', function() {
    assert.strictEqual(calculateNumber(2.499999, 3.499999, 'DIVIDE'), 2 / 3);
  });

  it('DIVIDE: dividing by 0', function() {
    assert.strictEqual(calculateNumber(2.0, 0.0, 'DIVIDE'), 'Error');
  });
});
