/**
 * Class with basic math arithmetic methods.
 */
class Calculator {
  /**
   * Returns sum of `x` plus `y`.
   * @param {number} x 
   * @param {number} y 
   */
  add(x, y) {
    return x + y;
  }

  /**
   * Returns difference of `x` minus `y`.
   * @param {number} x 
   * @param {number} y 
   */
  subtract(x, y) {
    return x - y;
  }

  /**
   * Returns product of `x` and `y`.
   * @param {number} x 
   * @param {number} y 
   */
  multiply(x, y) {
    return x * y;
  }

  /**
   * Returns `x` divided by `y`.
   * @param {number} x 
   * @param {number} y 
   */
  divide(x, y) {
    // Short-circuit if trying to divide by 0
    if (y === 0) {
      return NaN;
    }

    return x / y;
  }
}

module.exports = Calculator;
