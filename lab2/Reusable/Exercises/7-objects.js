'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const obj1 = {
    name: 'Arsenii'
  };
  let obj2 = {
    name: 'Arsenii'
  };
  obj1.name = 'Tom';
  obj2.name = 'Herald';
  obj2 = { name: 'Alphred' };
};

module.exports = { fn };
