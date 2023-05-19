const assertArraysEqual = require('../assertArraysEqual');
const letterPositions =require('../letterPositions');
const eqArrays =require('../eqArrays');

// TEST CODE
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs");
assertArraysEqual(letterPositions("hello").h, [0], true);
assertArraysEqual(letterPositions("hello").e, [1], true);
assertArraysEqual(letterPositions("hello").l, [2, 3], true);
assertArraysEqual(letterPositions("hello").o, [4], true); 