'use strict';

const generateKey = (length, possible) => {
  let key = '';
  const max = possible.length;
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * max);
    key += possible[index];
  }
  return key;
};

module.exports = { generateKey };
