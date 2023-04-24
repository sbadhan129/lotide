function tail(array) {
  return array.slice(0);
}


var assertEqual = function(actual, expected) {
  if (actual === expected ){
    console.log("✅✅✅Assertion passed: ${actual} === ${expected}");
  }
  else{
    console.log("🛑🛑🛑Assertion failed: ${actual} !== ${expected}");
  }
  
};


// TEST CODE
var words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);