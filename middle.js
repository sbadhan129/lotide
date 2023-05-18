const assertEqual = require('./assertEqual');

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

module.exports = middle;
