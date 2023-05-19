# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sbadhan129/lotide`

**Require it:**

`const _ = require('@sbadhan129/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `assertArraysEqual`: Compares two arrays and asserts whether they are equal.
* `assertEqual`: Compares two values and asserts whether they are equal.
* `assertObjectsEqual`: Compares two objects and asserts whether they are equal.
* `countLetters`: Counts the occurrences of each letter in a given string.
* `countOnly`: Counts the occurrences of specified items in an array.
* `eqArrays`: Checks if two arrays are equal.
* `eqObjects`: Checks if two objects are equal.
* `findKey`: Finds a key in an object based on a provided callback function.
* `findKeyByValue`: Finds a key in an object by its corresponding value.
* `flatten`: Flattens a nested array into a single-level array.
* `head`: Retrieves the first element of an array.
* `letterPositions`: Retrieves the indices of each letter in a given string.
* `map`: Applies a callback function to each element of an array and returns a new array.
* `middle`: Retrieves the middle element(s) of an array.
* `tail`: Retrieves all elements of an array except for the first one.
* `takeUntil`: Retrieves elements from an array until a specified condition is met.
*  `without`: Filters out specified elements from an array.
