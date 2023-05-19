const assertArraysEqual = require('../assertArraysEqual');
const map =require('../map');

const word = ["ground", "control", "to", "major", "tom"];
// TEST CODE
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual(map(word, word => word[0]), ['g', 'c', 't', 'm', 't']);

console.assert ( "Lighthouse Labs"==="Lighthouse Labs"); 