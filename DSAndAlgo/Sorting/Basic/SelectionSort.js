function selectionSort(arr) {
  const sort = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) sort(arr, i, lowest);
  }
  return arr;
}

// console.log(selectionSort([13, 1, 77, 43, -1, 7, 12, 23]));

/* 
Time Complexity:-
Best Case - O(n^2)
Avg Case - O(n^2)
Worst Case - O(n^2)

Space Complexity : O(1)
*/
