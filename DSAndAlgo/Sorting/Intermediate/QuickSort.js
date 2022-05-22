// Helper function to find pivot element
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  //Swap the pivot from the start to swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

//Quick Sort
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// console.log(quickSort([13, 1, 77, 43, -1, 7, 12, 23]));
// console.log(quickSort([34, 55, 1, 23, 11, 82, 33, 18, 5, 7, 9]));

/* 
Time Complexity:-
Best Case - O(n logn)
Avg Case - O(n logn)
Worst Case - O(n^2)

Space Complexity : O(log n)
*/
