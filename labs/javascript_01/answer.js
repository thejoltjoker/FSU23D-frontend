/**
 * @preserve 7fceecfcd58819294c12188dc73599d7
 *
 * 7fceecfcd58819294c12188dc73599d7
 * javascript1
 * lab1
 * v1
 * dbwebb clone javascript1
 * 2019-10-12 10:17:00
 * v4.0.0 (2019-03-05)
 *
 * Generated 2019-10-12 12:17:00 by dbwebb lab-utility v4.0.0 (2019-03-05).
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
   * Lab 1 - statements
   *
   * Statements and expressions in JavaScript.
   *
   * Use MDN as your reference and base to solving the exercises.
   *
   */

  /** ----------------------------------------------------------------------
   * Section 1 . If, else if and else
   *
   */

  /**
   * Exercise 1.1 (1 points)
   *
   * Create five variables: `card1, card2, card3, card4, card5`.
   *
   * Assign the values `4, 2, 7, 1, 11` to the variables created above.
   *
   * Add them up and put the sum in a variable called `result`.
   *
   * Answer with the variable `result`.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  let card1 = 4;
  let card2 = 2;
  let card3 = 7;
  let card4 = 1;
  let card5 = 11;

  let result = card1 + card2 + card3 + card4 + card5;

  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.1", ANSWER, true);

  /**
   * Exercise 1.2 (1 points)
   *
   * Use an `if statement` to see if the five cards (card1-card5) have a
   * combined sum that is higher than 21.
   *
   * Create a variable `status` and give it a different value depending on the
   * following.
   *
   * * If the sum is higher than 21, give your variable the value `"busted"`.
   * * Else give it the value `"safe"`.
   *
   * Answer with your status-variable.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  // Define variable
  let status;
  // Check if the number is greater than 21
  if (result > 21) {
    status = "busted";
  } else {
    status = "safe";
  }
  ANSWER = status;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.2", ANSWER, false);

  /**
   * Exercise 1.3 (1 points)
   *
   * Use `if else statements` to see if the combined value of the first three
   * cards (card1-card3) is lower, higher or exactly 21.
   *
   * Answer with a string corresponding to the result:
   * lower = `"safe"`
   * higher = `"busted"`
   * 21 = `"black jack"`
   *
   * Store the response in your status-variable and answer with it.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  // Define variable with first three cards
  let first_three_cards = card1 + card2 + card3;

  // Do individual if statements instead of else if, as stated in instructions
  if (first_three_cards > 21) {
    status = "busted";
  }

  if (first_three_cards < 21) {
    status = "safe";
  }

  if (first_three_cards == 21) {
    status = "black jack";
  }

  ANSWER = status;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.3", ANSWER, false);

  /**
   * Exercise 1.4 (2 points)
   *
   * Create three variables: `dealer1, dealer2, dealer3`.
   *
   * Assign the values `1, 6, 7` to the variables.
   *
   * Combine the `if`, `else if`, `else` statements and the operator `AND (&&)`
   * to see what the dealer should do. Combine as you feel needed.
   *
   * If the sum of the dealercards is lower than 17, answer with `"pick"`, if
   * the sum is higher than or equal to 17 and lower than 21 answer with
   * `"stop"`. If the sum is 21 answer with `"black jack"`. If the sum is higher
   * than 21 answer with `"busted"`.
   *
   * Store the response in a variable, and answer with it.
   *
   * PS. You can change the sum to test that your if-statement really works for
   * all values, just to try it out.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  // Define variables
  let dealer1 = 1;
  let dealer2 = 6;
  let dealer3 = 7;

  // Add numbers to a single variable for if statement
  let dealerCards = dealer1 + dealer2 + dealer3;

  if (dealerCards < 17) {
    // If value is less than seventeen
    status = "pick";
  } else if (dealerCards >= 17 && dealerCards < 21) {
    // If value is seventeen or more, but less than 21
    status = "stop";
  } else if (dealerCards == 21) {
    // If value is equal to 21
    status = "black jack";
  } else {
    // All other values
    status = "busted";
  }
  ANSWER = status;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.4", ANSWER, false);

  /** ----------------------------------------------------------------------
   * Section 2 . Switch, case
   *
   */

  /**
   * Exercise 2.1 (1 points)
   *
   * Use a switch-case statement to create a message with the type of fruit and
   * its color. You have the following type of fruits with a corresponding
   * color:
   *
   * * banana: yellow
   * * apple: green
   * * kiwi: green
   * * plum: purple
   *
   * Create a variable `myFruit` which holds the current type of your fruit. If
   * 'myFruit' is banana, the result should be a variable containing the string
   * value `"The banana is yellow."`
   *
   * Ensure that your switch-case works for all values.
   *
   * Answer with the result where `myFruit = "plum"`.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  // Define variables
  let myFruit = "plum";
  let color;

  // Create switch case for all fruits
  switch (myFruit) {
    case "banana":
      color = "yellow";
      break;
    case "apple":
      color = "green";
      break;
    case "kiwi":
      color = "green";
      break;
    case "plum":
      color = "purple";
      break;
  }
  // Create response message using variables
  let response = `The ${myFruit} is ${color}.`;
  ANSWER = response;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("2.1", ANSWER, false);

  /**
   * Exercise 2.2 (1 points)
   *
   * Extend your switch-case statement with a `default value`. The result should
   * be:
   *
   * `"That is an unknown fruit."` when the variable 'myFruit' has an unknown
   * value.
   *
   * Answer with the result where 'myFruit = pear'.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  myFruit = "pear";
  response = "That is an unknown fruit.";
  // Same switch case as previous exercise but with an added default value
  switch (myFruit) {
    case "banana":
      color = "yellow";
      break;
    case "apple":
      color = "green";
      break;
    case "kiwi":
      color = "green";
      break;
    case "plum":
      color = "purple";
      break;
    default:
      color = null;
  }
  // Change response if an existing fruit was picked
  if (color) {
    response = `The ${myFruit} is ${color}.`;
  }
  ANSWER = response;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("2.2", ANSWER, false);

  /** ----------------------------------------------------------------------
   * Section 3 . For loops
   *
   */

  /**
   * Exercise 3.1 (1 points)
   *
   * Use a `for-loop` to increment `481` with the value `6`, `10` times.
   *
   * Answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  // Define starting value
  let num = 481;

  // Create simple for loop which loops ten times
  for (let i = 0; i < 10; i++) {
    // Increment value
    num += 6;
  }
  ANSWER = num;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("3.1", ANSWER, false);

  /**
   * Exercise 3.2 (1 points)
   *
   * Use a for-loop to decrement `551` with the value `8`, `10` times.
   *
   * Answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  // Set default value
  num = 551;

  // For loop ten times
  for (let i = 0; i < 10; i++) {
    // Decrease number
    num -= 8;
  }
  ANSWER = num;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("3.2", ANSWER, false);

  /**
   * Exercise 3.3 (3 points)
   *
   * Use a for-loop to add all the even values in the range `22` to `45` to a
   * string with each number separated by a comma `,`.
   *
   * The result should not end with a comma. You should neither have a space
   * after the comma.
   *
   * Answer with the resulting string.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  // Define an empty array
  let even_numbers = [];
  // Create for loop that goes through the number sequence
  for (let i = 22; i <= 45; i++) {
    // Check if number is divisable by two to determine if even or odd
    if (!(i % 2)) {
      // If number is even add it to the array
      even_numbers.push(i);
    }
  }
  // Concatenate array to comma separated string
  response = even_numbers.join(",");
  ANSWER = response;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("3.3", ANSWER, false);

  /** ----------------------------------------------------------------------
   * Section 4 . While loops
   *
   */

  /**
   * Exercise 4.1 (1 points)
   *
   * Use a `while-loop` to increment `10` with the value `6` until it has
   * reached or passed `481`.
   *
   * Answer with the amount of steps needed.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  // Define variables
  let i = 10;
  let steps = 0;

  // Run loop while increment is lower than or equal to 481
  while (i <= 481) {
    // Increment number and step count
    i += 6;
    steps += 1;
  }

  ANSWER = steps;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("4.1", ANSWER, false);

  /**
   * Exercise 4.2 (1 points)
   *
   * Use a while-loop to subtract `8` from `551` until the value has reached or
   * passed `0`.
   *
   * Answer with the amount of steps needed.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  // Set variables
  i = 551;
  steps = 0;

  // Run while i is greater than or equal to zero
  while (i >= 0) {
    // Subtract from i
    i -= 8;
    // Increment steps
    steps += 1;
  }

  ANSWER = steps;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("4.2", ANSWER, false);

  /**
   * Exercise 4.3 (3 points)
   *
   * Use a while-loop to add all the values, to a comma-separated string, in the
   * range `28` to `63`, where the value is divisable by 5 or 7.
   *
   * Answer with the resulting string.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  i = 28;
  let numbers = [];
  while (i <= 63) {
    // Check if value is divisable by 5 or 7
    if (i % 5 == 0 || i % 7 == 0) {
      numbers.push(i);
    }
    // Increment i
    i += 1;
  }
  response = numbers.join(",");
  ANSWER = response;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("4.3", ANSWER, false);

  console.log(dbwebb.exitWithSummary());
})(window.dbwebb);
