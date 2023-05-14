const assertArraysEqual = function(arr1 , arr2) {
  if (arr1 === arr2 ){
    console.log(`✅✅✅Assertion passed: ${arr1} === ${arr2}`);
  }
  else{
    console.log(`🛑🛑🛑Assertion failed: ${arr1} !== ${arr2}`);
  }
  
};
const  eqArrays=function(array1, array2)
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

function takeUntil(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};
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
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs"); 
assertArraysEqual(result, [1, 2, 3]);





