const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

// TEST CODE

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs"); 
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);