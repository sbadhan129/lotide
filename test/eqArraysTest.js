const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs"); 