const myNumbers = [20, 30, 40, 50];
console.log(myNumbers); //[ 20, 30, 40, 50 ]
console.log(myNumbers.toString()); //20,30,40,50 - type string

//Pushing and Poping
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); //pops the last element
console.log(fruits); //[ 'Banana', 'Orange', 'Apple' ]
// The pop() method returns the value that was "popped out"
let fruit = fruits.pop();
console.log(fruit); //Apple

fruits.push("Kiwi");
console.log(fruits); //[ 'Banana', 'Orange', 'Kiwi' ]

// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.
//Shift
const cars = ["bmw", "tesla", "fisker", "toyato"];
cars.shift(); //removes the first element and shifts other element to a lower index
console.log(cars); //[ 'tesla', 'fisker', 'toyato' ]

//unShift
cars.unshift("benz"); //adds to first element and shifts other element to a higher index
console.log(cars); //[ 'benz', 'tesla', 'fisker', 'toyato' ]

//concatenating
const bikes = ["duke", "re", "hero"];
const vehicle = cars.concat(bikes);
console.log(vehicle); //[ 'benz', 'tesla', 'fisker', 'toyato', 'duke', 're', 'hero' ]

//splice() - The splice() method adds new items to an array.
const colors = ["red", "green", "yellow", "purple", "pink"];
colors.splice(2, 0, "black"); //array.splice(where new elements should be added, how many elements should be removed, new elements, new elements);
console.log(colors); //[ 'red', 'green', 'black', 'yellow', 'purple', 'pink' ]

colors.splice(1, 2, "white"); //removes two items from index 1 to 2 and addes "white" to index 1
console.log(colors); //["red", "white", "purple", "pink"]

colors.splice(0, 1); //removes first element
console.log(colors); //["green", "yellow", "purple", "pink"]

//slice()
const new_colors = ["red", "green", "yellow", "purple", "pink"];
console.log(new_colors.slice(1)); //[ 'green', 'yellow', 'purple', 'pink' ] - slices from index 1 to last element
console.log(new_colors.slice(2, 4)); //[ 'yellow', 'purple' ] - slices from index 2 to 4 (excluding the 4 element)

//sorting
console.log(new_colors.reverse()); //[ 'pink', 'purple', 'yellow', 'green', 'red' ]

//sorting a number
const points = [40, 100, 1, 5, 25, 10];
const new_points = points.sort(function (a, b) {
  return a - b;
});
console.log(new_points); //[ 1, 5, 10, 25, 40, 100 ]

const new_points_descending = points.sort(function (a, b) {
  return b - a;
}); // sort an array descending
console.log(new_points_descending); //[ 100, 40, 25, 10, 5, 1 ]

//Fliter - The filter() method creates a new array with array elements that passes a test.
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6); //filters all words greater than length 6
console.log(result); //[ 'exuberant', 'destruction', 'present' ]

//reduce - reduces an array to single value
const numbers = [1, -1, 5, 7];

let sum = 0;
for (let n of numbers) {
  sum = sum + n;
}
console.log(sum); //12

const reduce_sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); //0 - initial value of accumulator
console.log(reduce_sum); //12

//every() - The every() method check if all array values pass a test.
const result3 = words.every((word) => word.length > 2); //checks if all the elements are greater than length 2
console.log(result3); //true

//some() - The some() method check if some array values pass a test.
const result4 = words.some((word) => word.length > 7); //checks if some (or any) the elements are greater than length 7
console.log(result4); //true

console.log(words.indexOf("elite")); //2 - get the index of "elite"

// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

//Find() - The find() method returns the value of the first array element that passes a test function.
const result5 = words.find((word) => word.length > 4); //find a elements with length greater 8
console.log(result5); //spray - find only the first element

// The findIndex() method returns the index of the first array element that passes a test function.

//Array.from() - The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]

//Array.keys() - The Array.keys() method returns an Array Iterator object with the keys of an array.
const keys = words.keys();

for (let x of keys) {
  console.log(x);
  /* 
  0
  1
  2
  3
  4
  5
  */
}

//Array.entries() - Create an Array Iterator, and then iterate over the key/value pairs
const w = words.entries();
for (let x of w) {
  console.log(x);
  /* 
[ 0, 'spray' ]
[ 1, 'limit' ]
[ 2, 'elite' ]
[ 3, 'exuberant' ]
[ 4, 'destruction' ]
[ 5, 'present' ]
  */
}

//Array.includes() to arrays. This allows us to check if an element is present in an array
const fruits_new = ["Banana", "Orange", "Apple", "Mango"];
fruits_new.includes("Mango"); // is true
