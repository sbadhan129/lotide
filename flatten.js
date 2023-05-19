var assertArraysEqual = function(arr1 , arr2) {
  if (arr1 === arr2 ){
    console.log(`✅✅✅Assertion passed: ${arr1} === ${arr2}`);
  }
  else{
    console.log(`🛑🛑🛑Assertion failed: ${arr1} !== ${arr2}`);
  }
  
};

function flatten(arrays) {
  const flattened = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      for (let j = 0; j < arrays[i].length; j++) {
        flattened.push(arrays[i][j]);
      }
    } else {
      flattened.push(arrays[i]);
    }
  }
  return flattened;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));


module.exports = flatten;
