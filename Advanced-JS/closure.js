/** A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function.
 In JavaScript, closures are created every time a function is created, at function creation time. **/

/** In Js, when we return a function from another function, we are effectively returning a combination of function definition along with the function's scope. 
  This would let the function definition have an associated presistent memory which could hold on to live data between executions. 
  That combination of the function and its scope chain is what is called a closure **/

//Without Closure
/**
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  inner();
}
outer();
outer();
**/

/**
output: 
1
1 
**/

//With Closure - a closure is when we return a inner function.
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}
const fn = outer();
fn();
fn();

/**
output: 
1
2
**/
