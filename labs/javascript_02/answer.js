/**
 * @preserve 103a89eac5bbd238d5bb6013b1a025ae
 *
 * 103a89eac5bbd238d5bb6013b1a025ae
 * javascript1
 * lab2
 * v2
 * dbwebb clone javascript1
 * 2019-10-16 15:01:51
 * v4.0.0 (2019-03-05)
 *
 * Generated 2019-10-16 17:01:51 by dbwebb lab-utility v4.0.0 (2019-03-05).
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
   * Lab 2 - functions
   *
   * Practice to write functions.
   *
   */

  /** ----------------------------------------------------------------------
   * Section 1 . Basic functions
   *
   * Practice on basic functions.
   *
   */

  /**
   * Exercise 1.1 (1 points)
   *
   * Create a function `sumRangeNumbers()` that returns the sum of all numbers
   * between two chosen numbers. The function should take two arguments, one
   * representing the lowest boundary and one that represents the highest
   * boundary. For example, the arguments 10 and 20 should return the sum of
   * 10+11+12+13...+20.
   *
   * Test it using the values `22 and 91`, answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  function sumRangeNumers(lowest, highest) {
    let sum = 0;
    for (let i = lowest; i <= highest; i++) {
      sum += i;
    }
    return sum;
  }
  let result = sumRangeNumers(22, 91);
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.1", ANSWER, false);

  /**
   * Exercise 1.2 (1 points)
   *
   * Create a function called `fruitColor()` that takes one argument called
   * `fruit` and returns the color of the fruit.
   *
   * The function should be aware of the following fruits (`banana, apple, kiwi,
   * plum`) with respective color (`yellow, green, green, red`).
   *
   * Try it out using the fruit `plum` and answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  // Get the color of the fruit
  function fruitColor(fruit) {
    // Define color variable
    let color;
    switch (fruit) {
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
        color = "red";
        break;
    }
    return color;
  }
  result = fruitColor("plum");
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.2", ANSWER, false);

  /**
   * Exercise 1.3 (1 points)
   *
   * Create a function `printRange()` that takes two arguments `rangeStart` and
   * `rangeStop` and returns a string with all numbers comma-separated in the
   * range.
   *
   * Try it using the arguments `25 and 46`.
   *
   * Answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  function printRange(rangeStart, rangeStop) {
    // Create empty array
    let numbers = [];

    // Run for loop for all numbers inbetween
    for (let i = rangeStart; i <= rangeStop; i++) {
      // Add number to array
      numbers.push(i);
    }
    // Join numbers with a comma and return string
    return numbers.join(",");
  }
  result = printRange(25, 46);
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.3", ANSWER, false);

  /**
   * Exercise 1.4 (1 points)
   *
   * Create a function `printRangeReversed()` that takes two arguments
   * `rangeStart` and `rangeStop` and returns a string with all numbers
   * comma-separated in the range.
   *
   * Try it using the arguments `46 and 25`.
   *
   * Answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  function printRangeReversed(rangeStart, rangeStop) {
    // Create empty array
    let numbers = [];

    // Run for loop for all numbers inbetween
    for (let i = rangeStart; i >= rangeStop; i--) {
      // Add number to array
      numbers.push(i);
    }
    // Join numbers with a comma and return string
    return numbers.join(",");
  }
  result = printRangeReversed(46, 25);
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.4", ANSWER, false);

  /**
   * Exercise 1.5 (1 points)
   *
   * Create a function `printAnyRange()` that takes two arguments `rangeStart`
   * and `rangeStop` and returns a string with all numbers comma-separated in
   * the range.
   *
   * If `rangeStart` is smaller than `rangeStop` then call the function
   * `printRange()`.
   *
   * If `rangeStart` is greater than `rangeStop` the call the function
   * `printRangeReversed()`.
   *
   * Try it using the arguments `25 and 46` (both ways).
   *
   * Answer with the result using arguments 25 and 46.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  function printAnyRange(rangeStart, rangeStop) {
    if (rangeStart < rangeStop) {
      // Run printRange if the range starts with a lower number
      return printRange(rangeStart, rangeStop);
    } else {
      // Run printRangeReversed if the range starts with a higher number
      return printRangeReversed(rangeStart, rangeStop);
    }
  }
  result = printAnyRange(46, 25);
  // Return true if range starts with 46 to test both ranges
  console.log(result.startsWith("46"));
  result = printAnyRange(25, 46);
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.5", ANSWER, false);

  /**
   * Exercise 1.6 (1 points)
   *
   * Create a function called `stringRepeat()` that returns a string a specific
   * number of times. The function should take two arguments, one string and one
   * number: `grey` and `12`. The number represents the number of times the
   * string should be added to a string.
   *
   * Test the function and answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  function stringRepeat(text, repeats) {
    // Run string.repeat on text
    return text.repeat(repeats);
  }
  result = stringRepeat("grey", 12);
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.6", ANSWER, false);

  /**
   * Exercise 1.7 (1 points)
   *
   * Create a function `inRange()` that takes three arguments, `rangeStart`,
   * `rangeStop` and `value`.
   *
   * The function should return boolean `true` if value is greater than
   * rangeStart and less than rangeStop. Otherwise it should return boolean
   * `false`.
   *
   * Try it out using the range `131 - 547` and the value `434`.
   *
   * Answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  function inRange(value, rangeStart, rangeStop) {
    // Return true if value is greater than rangeStart and less than rangeStop
    return value >= rangeStart && value <= rangeStop;
  }
  result = inRange(434, 131, 547);
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.7", ANSWER, false);

  /**
   * Exercise 1.8 (1 points)
   *
   * Try out the function `inRange()` using the range `131 - 547` and the value
   * `636`.
   *
   * Answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  result = inRange(636, 131, 547);
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.8", ANSWER, false);

  /**
   * Exercise 1.9 (1 points)
   *
   * Create a function called `degreesToRadians()` that should take one
   * argument, a degree value. The function should convert the value to radians
   * and return the result with max 4 decimals.
   *
   * Test your function with the value `32` and answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  function round(input, decimals = 4) {
    // Function for rounding numbers to four decimals
    let multiplier = 10 ** decimals;
    return Math.round(input * multiplier) / multiplier;
  }

  function degreesToRadians(degrees) {
    // Calculate radians from degrees
    let radians = (degrees * Math.PI) / 180;

    // Return rounded number
    return round(radians);
  }
  result = degreesToRadians(32);
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.9", ANSWER, false);

  /**
   * Exercise 1.10 (1 points)
   *
   * Create a function called `fizzBuzz()` that takes two arguments `start` and
   * `stop` and returns a comma-separated string.
   *
   * The arguments represents the starting point and stop point of the game
   * `Fizz Buzz` (http://en.wikipedia.org/wiki/Fizz_buzz). The function should
   * run from start to stop and add `Fizz`, `Buzz` or both to your
   * result-variable at appropriate numbers.
   *
   * Each entry to your result should be comma-separated. If `stop` is equal or
   * lower than `start`, the function should return an appropriate error
   * message.
   *
   * Test the function using `start=1 and stop=30`.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  // function fizzBuzz(start, stop) {
  //   let values = [];
  //   if (start < stop) {
  //     // Only run if start is greater than stop
  //     for (let i = start; i <= stop; i++) {
  //       if (i % 3 == 0 && i % 5 == 0) {
  //         // Number is divisable by both three and five
  //         values.push("Fizz Buzz");
  //       } else if (i % 3 == 0) {
  //         // Number is divisable by three
  //         values.push("Fizz");
  //       } else if (i % 5 == 0) {
  //         // Number is divisable by five
  //         values.push("Buzz");
  //       } else {
  //         values.push(i);
  //       }
  //     }
  //     // Combine values to comma separated string
  //     return values.join(",");
  //   } else {
  //     // Return error
  //     return "The start value has to be lower than the stop value";
  //   }
  // }
  // result = fizzBuzz(1, 30);

  function fizzBuzz(start, stop) {
    let result = "";
    if (start >= stop) {
      return "Du kan inte ens ange två olika tal, idiot ☠️";
    }

    for (let i = start; i <= stop; i++) {
      // if (i % 3 == 0 && i % 5 == 0) {
      //   result += "Fizz Buzz";
      // } else if (i % 3 == 0) {
      //   result += "Fizz";
      // } else if (i % 5 == 0) {
      //   result += "Buzz";
      // } else {
      //   result += i;
      // }
      // if (i != stop) {
      //   result += ",";
      // }
      const isDivisableBy = (number, divider) => Boolean(number % divider == 0);
      result +=
        (isDivisableBy(i, 3) && isDivisableBy(i, 5)
          ? "Fizz Buzz"
          : isDivisableBy(i, 3)
          ? "Fizz"
          : isDivisableBy(i, 5)
          ? "Buzz"
          : i) + (i != stop ? "," : "");
    }

    return result;
  }

  result = fizzBuzz(1, 30);
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("1.10", ANSWER, false);

  /** ----------------------------------------------------------------------
   * Section 2 . Extra assignments
   *
   * These questions are worth 3 points each. Solve them for extra points. In
   * this section, you could re-use your code from lab 1 in exercise 2.1 and
   * 2.2.
   *
   */

  /**
   * Exercise 2.1 (3 points)
   *
   * Create a function called `printSum()` that should take two variables, the
   * sum of the players hand and the sum of the dealers hand.
   *
   * Your hand should be three cards with the values: `4, 10 and 3`.
   * The dealers hand should be three card with the values: `3, 6, 11`.
   * The function should return the sum and the player: `Player: 17, Dealer:
   * 20`.
   *
   * Test your function with the given values and answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */
  function sum(numbers) {
    // Sum numbers using javascript reduce
    return numbers.reduce((x, y) => x + y, 0);
  }
  function printSum(playerHand, dealerHand) {
    // Return string to print
    return `Player: ${sum(playerHand)}, Dealer: ${sum(dealerHand)}`;
  }

  let playerHand = [4, 10, 3];
  let dealerHand = [3, 6, 11];

  // Make string from returned object
  result = printSum(playerHand, dealerHand);
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("2.1", ANSWER, false);

  /**
   * Exercise 2.2 (3 points)
   *
   * Create a function called `printResult()` that should take two variables,
   * the sum of the players hand and the sum of the dealers hand.
   *
   * Players hand should be three cards with the values: `4, 10 and 3`. The
   * dealers hand should be three card with the values: `3, 6, 11`.
   *
   * This time you should include the check from lab 2 where you find out the
   * boundaries of the player and the dealer.
   * Player hand = 21 (black jack).
   * Player hand less than 21 (safe).
   * Player hand larger than 21 (busted).
   * Dealer hand less than 17 (safe).
   * Dealer hand larger or equal to 17 and less than 21 (stop).
   * Dealer hand = 21 (black jack).
   * Delaer hand larger than 21 (busted).
   *
   * Return a string in the format: `Player: safe, Dealer: busted`.
   *
   * Test your function with the given values and answer with the result.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  function printResult(playerSum, dealerSum) {
    function check(sum, isDealer = false) {
      // Run black jack checks for sum
      let status;
      if (sum > 21) {
        status = "busted";
      } else if (sum == 21) {
        status = "black jack";
      } else if (isDealer && sum >= 17 && sum < 21) {
        // This only applies to dealer
        status = "stop";
      } else {
        status = "safe";
      }
      return status;
    }

    return `Player: ${check(playerSum)}, Dealer: ${check(dealerSum, true)}`;
  }

  playerHand = [4, 10, 3];
  dealerHand = [3, 6, 11];
  result = printResult(sum(playerHand), sum(dealerHand));
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("2.2", ANSWER, false);

  /**
   * Exercise 2.3 (3 points)
   *
   * Create a function called `calculateInterest()` that returns the money you
   * have after x years of interest, given three arguments: `745, 31 and 5`.
   * First argument represents the start money, the second argument represents
   * the number of years your money produces interest. The third argument is the
   * interest rate in percent (%).
   *
   * Test your function and answer with the result with a maximum of 4 decimals.
   *
   * Write your code below and put the answer into the variable ANSWER.
   */

  function calculateInterest(startValue, years, rate) {
    // let interest = startValue * (rate / 100) * years;
    // let interest = startValue * (1 + (rate / 100) * years);
    // Compound interest calc
    let n = 1; // Compounding periods per year
    let interest = startValue * (1 + rate / 100 / n) ** (n * years);
    return round(interest);
  }
  result = calculateInterest(745, 31, 5);
  console.log(result);
  ANSWER = result;

  // I will now test your answer - change false to true to get a hint.
  dbwebb.assert("2.3", ANSWER, false);

  console.log(dbwebb.exitWithSummary());
})(window.dbwebb);
