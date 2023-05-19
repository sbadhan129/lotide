const assertEqual = require('../assertEqual');
const assertObjectsEqual = require('../assertObjectsEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs"); 

const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
assertObjectsEqual(obj1, obj2);
