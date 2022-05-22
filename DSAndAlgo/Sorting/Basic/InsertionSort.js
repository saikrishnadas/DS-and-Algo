function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// console.log(insertionSort([13, 1, 77, 43, -1, 7, 12, 23]));

/* 
Time Complexity:-
Best Case - O(n)
Avg Case - O(n^2)
Worst Case - O(n^2)

Space Complexity : O(1)
*/
