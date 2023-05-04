var assertEqual = function(actual, expected) {
  if (actual === expected ){
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
  
};

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (object[key] === value) {
        return key;
      }
    }
  }
  return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs"); 
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);