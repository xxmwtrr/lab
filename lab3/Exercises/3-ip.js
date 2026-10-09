'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const parts = ip.split('.');
  let res = 0;
  for (const part of parts) {
    res = (res << 8) + parseInt(part, 10);
  }
  return res;
}; 

module.exports = { ipToInt };
