var assertEqual = function(actual, expected) {
  if (actual === expected ){
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
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
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs"); 