'use strict';



const difference = (array1, array2) => {
  const exclude = new Set(array2);
  return array1.filter((item) => !exclude.has(item));
};

module.exports = { difference };