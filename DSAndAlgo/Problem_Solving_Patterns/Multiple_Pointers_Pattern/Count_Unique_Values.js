/* 
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.

Sample I/O:
countUniqueValues([1,1,1,1,1,2]) //2
countUniqueValues([1,2,3,4,4,4,5,7,7,12,12,13]) //8
countUniqueValues([]) //0
countUniqueValues([-2,-1,-1,0,1]) //4
*/

// make two pointer, one points to index 0 and another to index 1. Goal is to bring all the unique values to the left. So, if one pointer is not equal to another pointer while looping, increment the first pointer and change its value of the first pointer
function countUniqueValues(arr) {
  if (arr.length === 0) return 0; //If array length is zero, return 0
  let i = 0; //First pointer
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(i + 1);
  return i + 1;
}
//Time Complexity - O(n), Space complextiy- O(1)

const arr = [1, 2, 2, 3, 4, 5, 5, 6, 6, 7];
countUniqueValues(arr);
