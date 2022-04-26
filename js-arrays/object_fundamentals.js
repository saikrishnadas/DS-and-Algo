/*
In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
*/

//Create a object

//Object Literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
}; //Object - name:value pair

//or create like this,
const car = {};
car.name = "tesla";
car.color = "black";
car.type = "electric";
car.range = 350;
console.log(car); //{ name: 'tesla', color: 'black', type: 'electric', range: 350 }

const bike = new Object(); //create using new ketword - But there is no need to use new Object().For readability, simplicity and execution speed, use the object literal method.
bike.name = "duke";
bike.color = "orange";
bike.type = "petrol";
bike.range = 32;
console.log(bike); //{ name: 'duke', color: 'orange', type: 'petrol', range: 32 }

//Accessing the property of an object
console.log(bike.name); //duke
//or
console.log(bike["name"]); //duke
//or
x = "name";
console.log(bike[x]); //duke

//Loop
for (let x in person) {
  //   console.log(x);
  /* 
  firstName
  lastName
  age
  eyeColor
  */
  console.log(person[x]);
  /* 
    John
    Doe
    50
    blue
  */
}

car.ceo = "elon"; //adding an object
delete car.type; // delete a property. or delete car["type"]

//Nested Object
myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

console.log(myObj.cars.car2); //BMW
console.log(myObj.cars["car2"]); //BMW
console.log(myObj["cars"]["car2"]); //BMW

// Nested Array Objects
const myObj2 = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

//To access arrays inside arrays, use a for-in loop for each array
for (let i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}
//Output
/* 
Ford
Fiesta
Focus
Mustang
BMW
320
X3
X5
Fiat
500
Panda
  */
