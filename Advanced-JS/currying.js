/* 
Currying is a process in functional programming in which we transform 
a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
Currying doesn’t call a function. It just transforms it.
*/

function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)); // 3
