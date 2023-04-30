var assertArraysEqual = function(arr1 , arr2) {
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

// TEST CODE
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs"); 

