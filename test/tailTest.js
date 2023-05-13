const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');

// TEST CODE
var words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);