const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.assert("Lighthouse Labs" === "Lighthouse Labs");


