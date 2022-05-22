/*
(*)Binary search is a much faster form of search.
(*)Rather than eliminating one element at a time, you can eliminate half of the the remaining elements at a time. (i.e)Divide and Conquer
(*)Binary Search only works on sorted Arrays!
*/

/* 
Write a function called BinarySearch which accepts an array and a value, and returns the index at which the value exists. 
If the value does not exist in the array, return -1.
Sample I/O:
BinarySearch([10,15,20,25,30],15) //1
BinarySearch([1,2,3,4,5],6) //-1

Binary Search Pseudocode:
(*) This function accepts a sorted array and a value
(*) Create a left pointer at the start of the array, and a right pointer at the end of the array.
(*) While the left pointer comes before the right pointer:
    (*)Create a pointer in the middle
    (*)If you find the value you want, return the index
    (*)If the value is too small, move the left pointer up (To middle + 1 -> because we have already checked middle in step 1)
    (*)If the value is too large, move the right pointer down (To middle - 1)
(*) If the value is never found, return -1
*/

function binarySearch(arr, num) {
  var left = 0;
  var right = arr.length - 1;
  var middle = Math.round((left + right) / 2);
  while (arr[middle] !== num && left <= right) {
    if (num > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.round((left + right) / 2);
  }
  if (arr[middle] === num) {
    return middle;
  } else {
    return -1;
  }
}

/* 
BIG O:

Best Case - O(1)
Worst Case & Avg Case - O(log n)
*/
