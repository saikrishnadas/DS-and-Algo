/* Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
*/
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

/*Write a function which accepts a number and return the factorial of that number. Factorial zero (0!) is always 1. */
function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

/* Wirte a function called productOfArray which takes in an array of numbers and returns the product of them all.*/
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

/* Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function. */
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

/* 
Write a recursive function called fiv which accepts a number and return the nth number in the Fibonacci Sequence. Recall that the Fibonacci Sequence is the sequence of the whole numbers 1,1,2,3,5,8,.... 
which starts with 1 and 1, and where every number thereafter is equal to the sum of the pervious tw numbers.
*/
function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
