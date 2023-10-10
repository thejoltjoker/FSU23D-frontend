/**
 * @preserve 76810db5d55af030731fff40d1159434
 *
 * 76810db5d55af030731fff40d1159434
 * javascript1
 * lab3
 * v2
 * dbwebb clone javascript1
 * 2019-10-16 15:02:05
 * v4.0.0 (2019-03-05)
 *
 * Generated 2019-10-16 17:02:05 by dbwebb lab-utility v4.0.0 (2019-03-05).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent */
/* jscs:disable indent */
(function (dbwebb) {
  "use strict";

  var ANSWER = null;

  console.log("Ready to begin.");

  /** ======================================================================
   * Lab 3 - arrays
   *
   * Practise arrays. You might find useful help here:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   *
   */

  /** ----------------------------------------------------------------------
   * Section 1 . Arrays
   *
   * To copy an array use array.slice() to make a real copy, not a shallow one.
   *
   */

  /**
   * Exercise 1.1 (1 points)
   *
   * Create a variable `array2` holding an array with the words:
   * `[potato,carrot,onion,leek,cabbage]`. Return the element on position: `1`
   * in array2.
   *
   * Answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  let array2 = ["potato", "carrot", "onion", "leek", "cabbage"];
  let result = array2[1];
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.1", ANSWER, false);

  /**
   * Exercise 1.2 (1 points)
   *
   * Use the variable `array2`. Concatenate the first item and the last item as
   * a string. Separate the string with `-`.
   *
   * Answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  result = [array2[0], array2[array2.length - 1]].join("-");
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.2", ANSWER, false);

  /**
   * Exercise 1.3 (1 points)
   *
   * Create an array, `array1`, with the items `47,98,-13,0,-412,499,3,1200`.
   *
   * Merge the two arrays, `array1` and `array2`, into a third variable
   * `array3`.
   *
   * Answer with array3.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  let array1 = "47,98,-13,0,-412,499,3,1200".split(",").map((i) => Number(i));
  let array3 = array1.concat(array2);
  result = array3;
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.3", ANSWER, false);

  /**
   * Exercise 1.4 (1 points)
   *
   * Create a variable `array21` as a clone of `array2`.
   * Sort `array21`.
   * (Hint:
   * http://stackoverflow.com/questions/3978492/javascript-fastest-way-to-duplic
   * ate-an-array-slice-vs-for-loop)
   *
   * Answer with the resulting array.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  let array21 = Array.from(array2).sort();
  result = array21;
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.4", ANSWER, false);

  /**
   * Exercise 1.5 (1 points)
   *
   * Create a variable `array11` as a copy of `array1`.
   * Sort `array11` according to its values. The smallest value comes first and
   * the largest value comes last.
   *
   * Answer with the resulting array.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  let array11 = Array.from(array1).sort((a, b) => a - b);
  result = array11;
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.5", ANSWER, false);

  /**
   * Exercise 1.6 (1 points)
   *
   * Create a variable `array22` which holds the same content as `array2` - but
   * all strings are uppercase.
   * Use the built-in Array-function `map()` to solve it.
   *
   * Answer with the array.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  let array22 = Array.from(array2).map((str) => str.toUpperCase());
  result = array22;
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.6", ANSWER, false);

  /**
   * Exercise 1.7 (1 points)
   *
   * Create a new array, `array12`. It should contain all positive numbers from
   * the `array1`.
   * Use the built-in array-function `filter()` to solve it.
   *
   * Answer with the resulting array.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  let array12 = Array.from(array1).filter((i) => i > 0);
  result = array12;
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.7", ANSWER, false);

  /**
   * Exercise 1.8 (1 points)
   *
   * Create a function `arrayAverage()` that takes one array as argument and
   * returns the average of all elements in that array.
   *
   * Try out the function using `array1` and answer with the rounded integer
   * result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  const arrayAverage = (arr) => {
    let avg = arr.reduce((partialSum, a) => partialSum + a, 0);
    console.log(avg);
    return Math.round(avg / arr.length);
  };

  result = arrayAverage(array1);
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.8", ANSWER, false);

  /** ----------------------------------------------------------------------
   * Section 2 . Modify arrays
   *
   * Learn how to modify arrays.
   *
   */

  /**
   * Exercise 2.1 (1 points)
   *
   * Create a new array `myArray` and make it a copy of `array1`. Switch place
   * on the first and the last element, with the help of built-in
   * array-functions.
   * Use the array-functions `pop(), push(), shift() and unshift()`.
   *
   * Answer with `myArray`.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  let myArray = Array.from(array1);
  let first = myArray[0];
  let last = myArray[myArray.length - 1];
  console.log(myArray);
  myArray.pop();
  console.log(myArray);
  myArray.shift();
  console.log(myArray);
  myArray.push(first);
  console.log(myArray);
  myArray.unshift(last);
  console.log(myArray);
  result = myArray;

  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("2.1", ANSWER, false);

  /**
   * Exercise 2.2 (1 points)
   *
   * In `myArray` change the `3rd and 4th` value to the boolean value `false`
   * using built-in array-function `splice()`.
   *
   * Answer with the resulting array.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  myArray.splice(2, 1, false);
  myArray.splice(3, 1, false);
  result = myArray;

  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("2.2", ANSWER, false);

  /**
   * Exercise 2.3 (1 points)
   *
   * Remove the `4th and 5th` item in 'myArray'. Then insert the string `MEGA`
   * after the item `3rd`. Answer with the resulting array.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  myArray.splice(3, 2, "MEGA");
  result = myArray;
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("2.3", ANSWER, false);

  /** ----------------------------------------------------------------------
   * Section 3 .  Arrays with loops
   *
   * Learn how to loop array elements
   *
   */

  /**
   * Exercise 3.1 (1 points)
   *
   * Create a variable "myString2" that holds an empty string.
   * Create an array "myArray2" that holds 5 values.
   * Manually fill each space in the array with the word "JavaScript".
   * Then concatinate the array elements into "myString2", using a loop.
   * Do not set a specific number to determine the number of loops.
   * Use instead the array-function .length to determine how many times you want to loop.
   *
   * Answer with the resulting "myString2" variable
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  let myString2 = "";
  let myArray2 = Array(5);
  console.log(myArray2);
  myArray2[0] = "JavaScript";
  myArray2[1] = "JavaScript";
  myArray2[2] = "JavaScript";
  myArray2[3] = "JavaScript";
  myArray2[4] = "JavaScript";
  console.log(myArray2);

  for (let i = 0; i < myArray2.length; i++) {
    myString2 += myArray2[i];
  }
  result = myString2;
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("3.1", ANSWER, false);

  /**
   * Exercise 3.2 (3 points)
   *
   * Create an array "myList" and assign it the following elements 1, 3, 5, 7, 9.
   * Create a variable "search" with the value 5
   *
   * If the "search" number is in the array, answer "The number is in the array",
   * otherwise "The number is not in the array"
   *
   * Make a loop that searches through the array.
   * You must check each position in the array against the value.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  let myList = [1, 3, 5, 7, 9];
  let search = 5;
  // More concise
  myList.includes(search)
    ? (result = "The number is in the array")
    : (result = "The number is not in the array");

  const numberInArray = (number, array) => {
    for (let num of array) {
      if (num === number) {
        return true;
      }
    }
    return false;
  };

  result = numberInArray(search, myList);

  numberInArray(search, myList)
    ? (result = "The number is in the array")
    : (result = "The number is not in the array");

  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("3.2", ANSWER, false);

  console.log(dbwebb.exitWithSummary());
})(window.dbwebb);
