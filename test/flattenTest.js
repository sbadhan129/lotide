const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

// TEST CODE
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs"); 