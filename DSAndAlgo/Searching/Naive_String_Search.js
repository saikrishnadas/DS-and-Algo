/* 
(*) Suppose you want to count the number of times a smaller string appears in a longer string.
(*) A straightforward approach involves checking pairs of characters individually.

Eg:-
Long String:                  Short String:
 wowomgzomg                       omg

 Answer - Count: 2 (Because 'omg' appears two times in the long string)
*/

/* 
Write a function called naiveSearch which accepts a string and a substring, and returns the count of occurance of substring in the string.
Sample I/O:
naiveSearch(ohsomguebomg,omg) //2

Pseudocode:
(*) Loop over the longer string
(*) Loop over the shorter string
(*) If the characters don't match, break out of the inner loop. 
(*) If the characters do match, keep going.
(*) If you complete the inner loop and find a match, increment the count of matches
(*) Return the count 
*/

//If confused, check the video
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

/* 
BIG O:

Time:
Worst Case - O(n * m)
n - length of string (long)
m - length of substring (short)

Space:
O(1)
*/
