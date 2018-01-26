const chai = require('chai');
const expect = chai.expect;
const Calculator = require('./../../src/classes/calculator.js');

describe("Calculator", function () {

  var calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  it("adds 1 and 2", function () {
    expect(calculator.add(1, 2)).to.equal(3);
  });

  it("subtracts 2 from 9", function () {
    expect(calculator.subtract(9, 2)).to.equal(7);
  });

  it("multiplies 4 and 3", function () {
    expect(calculator.multiply(4, 3)).to.equal(12);
  });

  it("divides 10 by 2", function () {
    expect(calculator.divide(10, 2)).to.equal(5);
  });

  it("does not divide by 0", function () {
    // Incorrect way to check for NaN
    // expect(calculator.divide(5, 0)).to.equal(NaN);

    expect(Number.isNaN(calculator.divide(5, 0))).to.be.true;
  });
});