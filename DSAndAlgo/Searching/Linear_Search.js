/* Looping through a array or dataset to find a data by checking one by one data from start to end 
Eg: Need to find 15 in [1,6,2,4,24,13,88,15,92,123,7,52]
Linear search approch loops through one by one in the array checking if it is equal to 15.

Most of the javascript build in array function is linear search. Eg: indexOf, includes, find etc. 
*/

/* 
Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. 
If the value does not exist in the array, return -1.
Sample I/O:
linearSearch([10,15,20,25,30],15) //1
linearSearch([1,2,3,4,5],6) //-1

Linear Search Pseudocode:
(*) This function accepts an array and a value
(*) Loop through the array and check if the current array element is equal to the value
(*) If it is, return the index at which the element is found.
(*) If the value is never found, return -1
*/

function linearSearch(arr, num) {
  const i = arr.indexOf(num);
  return i;
}
//OR
function linearSearch(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

/* 
BIG O:

Best Case - Incase the element is obtained in the first index - O(1)
Worst Case - O(n)
Avg Case - O(n)
*/
