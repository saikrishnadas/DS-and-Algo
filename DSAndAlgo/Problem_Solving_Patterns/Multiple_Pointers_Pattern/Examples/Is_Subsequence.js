/* Write a function called isSubsequence which takes in two strings and 
check whether the characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string appear somewhere in the second string,
without their order changing.

Sample I/O:
isSubsequence('hello','hello world') //true
isSubsequence('sing','sting') //true
isSubsequence('abc','abracadabra') //true
isSubsequence('abc','acb') //false (order changed)
*/

//SOLUTION 1 --> Iterative
function isSubsequenceIterative(str1, str2) {
  if (!str1) return false;
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) {
      console.log(true);
      return true;
    }
    j++;
  }
  console.log(false);
  return false;
}
//SOLUTION 2 --> Recursive (time complexity is less but space complexity is not O(1))
function isSubsequenceRecursive(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str1[0] === str2[0])
    return isSubsequenceRecursive(str1.slice(1), str2.slice(1));
  return isSubsequenceRecursive(str1, str2.slice(1));
}
