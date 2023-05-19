const assertArraysEqual = require('../assertArraysEqual');
const without =require('../without');

// TEST CODE

without([1, 2, 3], [1, 2, 3]);
without(["1", "2", "3"], [1, 2, "3"]);

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"] ), words ); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
