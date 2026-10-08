'use strict';

const fn = () => {
  // eslint-disable-next-line no-use-before-define
  console.log(a);
  // eslint-disable-next-line no-var
  var a = 5;
};

module.exports = { fn };
