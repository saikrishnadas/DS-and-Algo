//create a array
const cars = ["bmw", "tesla", "fisker"];
const cars2 = new Array("bmw", "tesla", "fisker"); //There is no need to use new Array(). For simplicity, readability and execution speed, use the array literal method.
console.log(cars); //[ 'bmw', 'tesla', 'fisker' ]
console.log(cars2); //[ 'bmw', 'tesla', 'fisker' ]

// Accessing Array Elements
console.log(cars[2]); //fisker

//change a value in a array
cars[0] = "benz";
console.log(cars); // ['benz', 'tesla', 'fisker' ]

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array
// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;

//sort
// cars.sort();
// console.log(cars); //[ 'benz', 'fisker', 'tesla' ]

//length
console.log(cars.length); //3

console.log(cars[-1]); //undefined - unlike python, you can't use -1 to access last value
console.log(cars[cars.length - 1]); // fisker - last array element

//looping
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
  /* 
  benz
  tesla
  fisker
  */
}

cars.forEach((car) => {
  console.log(car);
  /* 
  benz
  tesla
  fisker
  */
});

cars.map((car) => {
  console.log(car);
  /* 
  benz
  tesla
  fisker
  */
});

//Adding Element
cars.push("tata");
console.log(cars); //[ 'benz', 'tesla', 'fisker', 'tata' ]

cars[cars.length] = "toyato"; //adds elememt to the last of the array
console.log(cars); //[ 'benz', 'tesla', 'fisker', 'tata', 'toyato' ]

// cars[8] = "Lemon";  // Adding elements with high indexes can create undefined "holes" in an array .Creates undefined "holes" in fruits.

Array.isArray(cars); //true - checks if cars is a  array
