'use strict';
[[5, 2], [0, 9]]
const max = (matrix) => {
  let value = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell > value) value = cell;
    }
  }
  return value;
};

module.exports = { max };
