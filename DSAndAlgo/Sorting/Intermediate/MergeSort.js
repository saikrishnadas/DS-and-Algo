//Helper function to merge and sort two arrays
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

//Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// console.log(mergeSort([13, 1, 77, 43, -1, 7, 12, 23]));
// console.log(mergeSort([34, 55, 1, 23, 11, 82, 33, 18, 5, 7, 9]));

/* 
Time Complexity:-
Best Case - O(n logn)
Avg Case - O(n logn)
Worst Case - O(n logn)

Space Complexity : O(n)
*/
