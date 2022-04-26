/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist.

Sample Input:
sumZero([-3,-2,-1,0,1,2,3]) //[-3,3]
sumZero(-2,0,1,3]) //undefined
sumZero(1,2,3]) //undefined

NOTE: only works on sorted array
*/

//FIRST APPROCH - It is bad because Time complexity is O(n^2) (nested loop) and space complexity is 1.
function sumZeroOld(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        console.log([arr[i], arr[j]]);
        return [arr[i], arr[j]];
      }
    }
  }
}

//BETTER APPROCH - Time complexity O(n) and space complexity is 1
function sumZero(arr) {
  let left = 0; //left side pointer index
  let right = arr.length - 1; //right side pointer index
  while (left < right) {
    //if left side value is less than right side value
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      console.log([arr[left], arr[right]]);
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const myArr = [-4, -3, -2, -1, 0, 1, 2, 5];
sumZero(myArr);
