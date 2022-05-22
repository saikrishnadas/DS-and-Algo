//Check "Sorting Algorithms Animations" in Google.
//Check Visualgo.net for more animations on each sorts

//Bubble sort
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //Sorting ( you can also write this as seperate function and call here) //check bubbleSort3
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//OR - ES2015 version js
function bubbleSort2(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //Sorting ( you can also write this as seperate function and call here) //check bubbleSort4
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

//OR
function bubbleSort3(arr) {
  const sort = (arr, idx1, idx2) => {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        sort(arr, j, j + 1);
      }
    }
  }
  return arr;
}

//OR
function bubbleSort4(arr) {
  const sort = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        sort(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// console.log(bubbleSort4([13, 1, 77, 43, -1, 7, 12, 23]));

//OPTIMIZED CODE - The code above keeps sorting even if the arrays are sorted. This code helps to stop when code is sorted and helps to reduce time complexity.
function bubbleSort5(arr) {
  const sort = (arr, idx1, idx2) => {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };
  var noSwap;
  for (var i = arr.length; i > 0; i--) {
    noSwap = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        sort(arr, j, j + 1);
        noSwap = false; //If swap made set noSwap to false, so that it doesn't stop the code.
      }
    }
    if (noSwap) break; //If no swap is made stop the code - OPTIMIZATION
  }
  return arr;
}

// console.log(bubbleSort5([13, 1, 77, 43, -1, 7, 12, 23]));

/* 
Time Complexity:-
Best Case - O(n)
Avg Case - O(n^2)
Worst Case - O(n^2)

Space Complexity : O(1)
*/
