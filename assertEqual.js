var assertEqual = function(actual, expected) {
  if (1 === expected ){
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
  
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs"); 