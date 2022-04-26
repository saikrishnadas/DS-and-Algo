/*
Write a function called same, which accpets two arrays.
The function should return true if every value in the array has its corresponding value squared in the second array.
The frequency of values must be the same.

Sample Input 1:
same([1,2,3], [4,1,9]) Output: True
same([1,2,3], [1,9]) Output: False
same([1,2,1], [4,4,1]) Output: False (must be same frequency)
*/

//FIRST APPROCH
function sameOld(arr1, arr2) {
  //if the length of two array doesn't match return false
  if (arr1.length !== arr2.length) {
    console.log("false");
    return false;
  }

  //Loop through array1 and square the element and find index of that element in array2, if not present in array2 return false,
  //Else remove the found element from array2
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); //indexOf is a array method that loops through the array
    if (correctIndex === -1) {
      //if no found, indexOf will return -1
      console.log("false");
      return false;
    }

    arr2.splice(correctIndex, 1); //splice(index of element to remove, how many occurance to remove)
  }
  console.log("true");
  return true;
}
//Time Complexity for first approch - O(n^2) - As if loops through both the array every time. So, as the length of array increases, time doubles

//SECOUND APPROCH - Frequency Counter Pattern
function same(arr1, arr2) {
  //if the length of two array doesn't match return false
  if (arr1.length !== arr2.length) {
    console.log("false");
    return false;
  }

  let frequencyCounter1 = {}; //frequency of each element in the array1 - { '1': 1, '2': 2, '3': 1, '5': 1 }
  let frequencyCounter2 = {}; //frequency of each element in the array2 - { '1': 1, '4': 2, '9': 1, '25': 1 }

  for (let val of arr1) {
    //Loops through array1 and adds element frequency to the above object
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    //Loops through array2 and adds element frequency to the above object
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    //if the square of key from frequencyCounter1 is not in frequencyCounter2 then return false
    if (!(key ** 2) in frequencyCounter2) {
      console.log("false");
      return false;
    }
    //if the frequency doesn't match then return false - eg: if 2 is the key, 2 ** 2 = 4, {'4':2} for has 2 frequecy and that should match with frequencyCounter1[key] i.e {'2':2}
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
}
//Time Complexity for first approch - O(n) - As if loops through both the array once and takes the frequency of elements. Finding a element in obejct is constant and doesn't need to loop each time like array

//calling the function
const arr1 = [1, 2, 3, 5, 2];
const arr2 = [9, 1, 4, 25, 4];

same(arr1, arr2);
