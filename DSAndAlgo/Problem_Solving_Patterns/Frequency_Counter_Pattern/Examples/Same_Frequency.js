/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers 
have the same frequency of digits.

Sample I/O:
SameFrequency(182,281) //true
SameFrequency(34,14) //false
SameFrequency(3589578,5879385) //true
SameFrequency(22,222) //false
*/

function sameFrequency(str1, str2) {
  if (str1.length !== str2.length) return false;
  var lookup1 = {};
  var lookup2 = {};
  for (let val of String(str1)) {
    lookup1[val] = (lookup1[val] || 0) + 1;
  }
  for (let val of String(str2)) {
    lookup2[val] = (lookup2[val] || 0) + 1;
  }
  for (let key in lookup1) {
    if (!(key in lookup2)) {
      return false;
    }
    if (lookup1[key] !== lookup2[key]) {
      return false;
    }
  }
  return true;
}
