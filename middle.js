var assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${arr1} !== ${arr2}`);
  }
};

var eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(array) {
  let middleElements = [];
  if (array.length > 2) {
    let middleIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      middleElements = [array[middleIndex - 1], array[middleIndex]];
    } else {
      middleElements = [array[middleIndex]];
    }
  }
  return middleElements;
};

// TEST CODE
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.assert("Lighthouse Labs" === "Lighthouse Labs");

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
