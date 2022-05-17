/*Write a recursive function called  reverse  which accepts a string and returns a new string in reverse. */

function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

/* Write a recursive function called isPalindrome  which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

/*Write a recursive function called flatten  which accepts an array of arrays and returns a new array with all values flattened. */
function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  var flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArr = flattenedArr.concat(flatten(arr[i]));
    } else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
