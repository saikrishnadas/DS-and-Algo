/* 
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in. 
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Sample I/O:
areThereDuplicates(1,2,3) //false
areThereDuplicates(1,2,2) //true
areThereDuplicates('a','b','c','a') //true
*/

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

//One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
