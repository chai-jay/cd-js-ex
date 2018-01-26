/**
 * Returns a Promise that resolves to result of specified `Calculator`
 * method call. Rejects the promise if specified `operation` does not
 * exist.
 * @param {number} msDelay Number of milliseconds to delay operation call.
 * @param {any} calc Instance of `Calculator` class.
 * @param {string} operation Name of the `Calculator` class method to call.
 * @param {number[]} opArguments Array of arguments to pass to `Calculator` class method.
 */
function delay(msDelay, calc, operation, opArguments) {
  // Assumes using `Promise` of Node.js 8.9.4 env
  return new Promise((resolve, reject) => {
    // Truthy check for `calc`
    const op = calc && calc[operation];

    // Reject promise if the attempted operation does not exist.
    if (typeof op !== 'function') {
      reject(`Tried to execute '${operation}' on instance of ${calc.constructor.name}, which doesn't exist.`);
    }

    // Assumes using `setTimeout()` of Node.js 8.9.4 env
    resolve(setTimeout(op, msDelay, opArguments));
  });
}

module.exports = delay;
