//All the other sort - bubble, selection, insertion, merge and quick are comparison sorts.
//(i.e) it all compares on element with another (large or smaller) and sorts accordingly.

//Radix Sort is a special sorting algorithm that works on a lists of numbers. It never makes comparison between elements!
//It exploits the fact that information about the size of a number is encoded in the number of digits. More digits means a bigger number!
//It makes a buckets to sort the elements.

//Helper methods

//1
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//2
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//3
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

//Radix Sort
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); //creates 10 empty arrays
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// console.log(radixSort([13, 1, 77, 43, -1, 7, 12, 23]));
// console.log(radixSort([34, 55, 1, 23, 11, 82, 33, 18, 5, 7, 9]));

/* 
Time Complexity:-
Best Case - O(nk) 
Avg Case - O(nk)
Worst Case - O(nk)
where,
n = no.of numbers we are sorting (length of array)
k = length of those numbers (number of digits)

Space Complexity : O(n + k)
*/
