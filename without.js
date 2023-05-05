var assertArraysEqual = function(arr1 , arr2) {
 
  console.log(arr2);
  
  if (arr1 === arr2 ){
    console.log(`✅✅✅Assertion passed: ${arr1} === ${arr2}`);
  }
  else{
    console.log(`🛑🛑🛑Assertion failed: ${arr1} !== ${arr2}`);
  }
  
};


var eqArrays=function(array1, array2)
{
if (array1.length !== array2.length){
  return false;
}
for (let i =0; i < array1.length; i++){
 if( array1.length[i]!== array1.length[i]){
  return false;
 }
}
return true;
};



var without = function(source, itemsToRemove) {
  let result = [];
  for (let i =0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

// TEST CODE
assertArraysEqual("Lighthouse Labs", "Lighthouse Labs");
assertArraysEqual(1, 1);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs");


without([1, 2, 3], [1, 2, 3]);
without(["1", "2", "3"], [1, 2, "3"]);

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"] ), words ); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

