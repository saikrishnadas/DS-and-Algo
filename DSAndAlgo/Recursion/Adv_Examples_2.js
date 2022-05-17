/* Write a recursive function called capitalizeFirst.
Given an array of string, capitalize the first letter of each string in the array.

Sample I/O:
["nami","looks","hungry"] --> ["Nami","Looks","Hungry"]
*/
function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }
  let res = capitalizeFirst(arr.slice(0, -1));
  let string =
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
    arr.slice(arr.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

/* Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object which may contain nested objects.

Sample I/O:
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
Output: 6

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
Output: 10
*/
function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

/* Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.

Sample I/O:
["nami","looks","hungry"] --> ["NAMI","LOOKS","HUNGRY"]
*/
function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let res = capitalizeWords(arr.slice(0, -1));
  let word = arr.slice(arr.length - 1)[0].toUpperCase();
  res.push(word);
  return res;
}

/* Write a function called stringifyNumbers 
which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

Sample I/O:
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

Output:
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

/*Write a function called collectStrings 
which accepts an object and returns an array of all the values in the object that have a typeof string 

Sample I/O:
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

Output:
["foo", "bar", "baz"])
*/
function collectStrings(obj) {
  var newArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      newArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      newArr = newArr.concat(collectStrings(obj[key]));
    }
  }
  return newArr;
}
