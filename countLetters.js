


var assertEqual = function(actual, expected) {
  if (actual === expected ){
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
  
};

function countLetters(words) {
  const counts = {};
  
  for (const char of words) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  
  return counts;
}


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs");
assertEqual(countLetters("LHL"), {L: 2, H: 1});