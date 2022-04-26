/*
Divide and Conquer: 
This pattern involves dividing a dataset into smaler chucks and then repeating a process with a subset of data.
This pattern can tremendously decrease time complexity
*/

/*
Given a sorted array of integers, Write a function called search, that accepts a value and returns the index where the value passed to the
function is located.
If the value is not found, return -1.

Sample I/O:
search([1,2,3,4,5,6],4) //3
search([1,2,3,4,5,6],6) //5
search([1,2,3,4,5,6],11) // -1
*/

//FIRST APPROCH - loop through each element in a array and find the index. Time Complexity - O(n)
//Linear Search
function searchOld(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

//BETTER APPROCH using Divide and Conqure Pattern - Time Complexity Log(n)
//Binary Search
function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
