# Description
Located at https://github.com/chai-jay/cd-js-ex. Can be removed upon request.

JavaScript exercise. Tested using Node.js version `8.9.4` and Mocha + Chai + `chai-as-promised` libraries. 

Main code lives within `/src/` directory. 

Specs live within `/test/` directory. 

Note, I modified the assertions for `Calculator` class' `does not divide by 0` spec because `NaN === NaN` returns false.

# Setup
* Run `npm install`.
* Execute tests by running `npm run test`.

# TODO's
- [X] Eat dinner
- [X] Figure out which testing library is being used
- [X] Write main code
- [X] Ensure test code passes

# Potential Improvements
- Setup linting
- Add more validation of inputs (eg check class methods args are of type `number`, maybe throw `TypeError`? Or rely on JavaScript's implicit coercion?)