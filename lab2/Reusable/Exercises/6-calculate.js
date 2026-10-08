'use strict';

/* Call function from function in loop
- Implement function `average` with signature
  `average(a: number, b: number): number`
  calculating average (arithmetic mean).
- Implement function `square` with signature
  `square(x: number): number` calculating square of x.
- Implement function `cube` with signature
  `cube(x: number): number` calculating cube of x.
- Call `square` and `cube` in loop 0 to 9, pass results
  to function `average` on each iteration.
  Add calculation results to array and return this array
  from function `calculate`.

Call functions `square` and `cube` in loop, then pass their
results to function `average`. Print what `average` returns. */

const square = (num) => num * num;

const cube = (z) => z * z * z;

const average = (x, y) => (x + y) / 2;

const calculate = () => {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    result.push(average(square(i), cube(i)));
  }
  return result;
};

module.exports = { square, cube, average, calculate };
