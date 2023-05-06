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






const words = ["ground", "control", "to", "major", "tom"];
const map =function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

 
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);

// TEST CODE
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.assert ( "Lighthouse Labs"==="Lighthouse Labs"); 

