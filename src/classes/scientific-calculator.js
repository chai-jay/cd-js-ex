const Calculator = require('./calculator.js');

/**
 * Class with more advanced math operations on top of
 * basic math arithmetic methods.
 */
class ScientificCalculator extends Calculator {
  /**
   * Returns sine of an angle `rads` measured in radians.
   * @param {number} rads An angle measured in radians
   */
  sin(rads) {
    return Math.sin(rads);
  }

  /**
   * Returns cosine of an angle `rads` measured in radians.
   * @param {number} rads An angle measured in radians
   */
  cos(rads) {
    return Math.cos(rads);
  }

  /**
   * Returns tangent of an angle `rads` measured in radians.
   * @param {number} rads An angle measured in radians
   */
  tan(rads) {
    return Math.tan(rads);
  }

  /**
   * Returns the natural log (with base `e`) of a number.
   * @param {number} x 
   */
  log(x) {
    return Math.log(x);
  }
}

module.exports = ScientificCalculator;
