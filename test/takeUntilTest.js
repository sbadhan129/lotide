const assertArraysEqual = require('../assertArraysEqual');
const takeUntil =require('../takeUntil');

const numbers = [1, 2, 3, -4, 5, 6];
const isNegative = (num) => num < 0;
const result = takeUntil(numbers, isNegative);
console.log(result);

console.log('---');

const stringValue = ["I am awesome.", ",", "But you are not"  ];
const result1 = takeUntil(stringValue, x => x === ',');
console.log(result1);

// TEST CODE
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs"); 
assertArraysEqual(result, [1, 2, 3]);
