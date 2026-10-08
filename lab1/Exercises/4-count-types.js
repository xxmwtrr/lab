'use strict';

const countTypesInArray = (arr) => {
  const counters = {};
  for (const item of arr) {
    const type = typeof item;
    const count = counters[type] || 0;
    counters[type] = count + 1;

  }
  return counters;

};

module.exports = { countTypesInArray };
