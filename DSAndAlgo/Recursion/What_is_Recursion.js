//Recursion -  A process (a function in our case) that calls itself.

//call Stack : Tool that JS use to manage function invocations - Revise about it in udemy L-42

//Two essential parts of a recursive function - 1. Base Case (eg: exist code if the length of array is zero), 2. Different Input (eg: Ensure if the input is always different)

//Iterative
function countDownIterative(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All Done");
}

//RECURSIVE
function countDown(num) {
  //Base Case
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  //Different input is passed to the function
  num--;
  countDown(num);
}

countDown(5);
/* 

OUTPUT:
5
4
3
2
1
*/

//Example 2:
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

/*I/O ==> sumRange(3) ==> 6    sumRange(4) ==> 10 */

//Factorial
/*
Sample I/O:

factorial(4)   ===> 4! ===> 4*3*2*1 ===> 24
factorial(3)   ===> 3! ===> 3*2*1 ===> 6
*/

//Iterative
function factorialIterative(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

//RECURSIVE
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
