'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
  contains `phone`.
- Implement function `findPhoneByName` with signature
  `findPhoneByName(name: string): string`. Returning phone from hash/object.
  Use `hash[key]` to find needed phone. */

const phonebook = {
  'Pudge': '+380445554433',
  'Arsenii': '+380501234567',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
