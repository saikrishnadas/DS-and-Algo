/*
Wrtie a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.

Sample I/O:
maxSubarraySum([1,2,5,2,8,1,5],2) //10
maxSubarraySum([1,2,5,2,8,1,5],4) //17
maxSubarraySum([4,2,1,6],1) //6
maxSubarraySum([4,2,1,6,2],4) //13
maxSubarraySum([],4) //null
*/

//FIRST APPROCH - Time Complexity O(n^2)

function maxSubarraySumOld(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  console.log(max);
  return max;
}

maxSubarraySumOld([1, 2, 5, 2, 8, 1, 5], 4);

//BETTER APPROCH (Sliding Window Pattern) - Time Complexity O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log(maxSum);
  return maxSum;
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4);
