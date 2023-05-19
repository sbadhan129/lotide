const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

const name = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}; 
const x = (hills) => hills.stars === 2;

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs");
assertEqual(findKey(name, x) ,"noma" );