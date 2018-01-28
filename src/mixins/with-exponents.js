/**
 * Functional mixin to add exponent operations to calling object.
 * Use mixin with `withExponents.call(obj)` or `withExponents.apply(obj)`.
 */
function withExponents() {
  /**
   * Returns `base` raised to the power of `pow`.
   * @param {number} base 
   * @param {pow} pow 
   */
  this.pow = function(base, pow) {
    // Maybe can use arrow function here because not accessing `this` properties. 
    // Depends on team preference. Maybe keep using `function` declaration
    // to be future-proof (in case the future calls for use of `this` properties).
    return Math.pow(base, pow);
  };

  /**
   * Returns product of list of exponentials of 2-tuples `[t_1, t_2, ..., t_n]` where
   * `( t_1[0] ^ t_1[1] ) * ( t_2[0] ^ t_2[1] ) * ... * ( t_n[0] ^ t_n[1] )`.
   * @param {...number[]} tuples A list of 2-tuples
   */
  this.multiplyExp = function(...tuples) {
    // Throw `Error` if less than two 2-tuples provided
    // TODO: Do more validation of arguments (eg check for valid 2-tuple members)
    if (tuples.length < 2) {
      throw Error('Must provide at least two 2-tuples!');
    }

    let product = 1;

    for (let i = 0; i < tuples.length; i++) {
      product *= this.pow(tuples[i][0], tuples[i][1]);
    }

    return product;
  };

  /**
   * Returns quotient of exponentials of two 2-tuples `t_1, t_2` where
   * `( t_1[0] ^ t_1[1] ) / ( t_2[0] ^ t_2[1] )`.
   * Remember, order matters in division.
   * @param {number[]} tupleOne A 2-tuples of numbers
   * @param {number[]} tupleTwo A 2-tuples of numbers
   */
  this.divideExp = function(tupleOne, tupleTwo) {
    // TODO: Do more validation of arguments (eg check for valid 2-tuple members)
    return this.pow(tupleOne[0], tupleOne[1]) / this.pow(tupleTwo[0], tupleTwo[1]);
  };
}

module.exports = withExponents;
