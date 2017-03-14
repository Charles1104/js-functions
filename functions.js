/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

 function numberToString(num){
  num += "";
  return num;
 }

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(num){
  return num + 1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease(num){
  return num - 1;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x,y){
  return x + y;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract (num1,num2){
  return num1 - num2;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply (x,y){
  return x * y;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide (x,y){
  return x/y;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(x){
  return x*x;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate (operation,num1,num2){
  if (operation==="add"){
    console.log(num1 + " + " + num2 + " = " + add(num1,num2));
    return add(num1,num2);
  }
  else if (operation==="subtract"){
    console.log(num1 + " - " + num2 + " = " + subtract(num1,num2));
    return subtract(num1,num2);
  }
  else if (operation==="multiply"){
    console.log(num1 + " * " + num2 + " = " + multiply(num1,num2));
    return multiply(num1,num2);
  }
  else if (operation==="divide"){
    console.log(num1 + " / " + num2 + " = " + divide(num1,num2));
    return divide(num1,num2);
  }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan(a,b){
  if (a>b){
    return true;
  }
  else{
    return false;
  }
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(a,b){
  if (a<b){
    return true;
  }
  else{
    return false;
  }
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(a,b){
  if (a===b){
    return true;
  }
  else{
    return false;
  }
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(a,b){
  if (a<b){
    return a;
  }
  else{
    return b;
  }
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum(a,b){
  if (a>b){
    return a;
  }
  else{
    return b;
  }
}


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven(n){
  if(n%2 === 0){
  return true;
  }
  else{
    return false;
  }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd(n){
  if(n%2 !== 0){
  return true;
  }
  else{
    return false;
  }
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade(score,maxscore,grade){
  if (score/maxscore>=0.9){
    return "A";
  }
  else if (score/maxscore>=0.8){
    return "B";
  }
  else if (score/maxscore>=0.7){
    return "C";
  }
  else if (score/maxscore>=0.6){
    return "D";
  }
  else {
    return "F";
  }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

function incrementReviews(restaurant){
  if (typeof(restaurant.reviews) === "undefined"){
    restaurant.reviews =1;
  }

  else {
    restaurant.reviews +=1;
  }
  return restaurant;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine(string1, string2){
  return string1 + " " + string2;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(radius){
  var circle = {
    circumference: 2*Math.PI*radius,
    area: Math.PI * Math.pow(radius,2)
  };
  return circle;
}
