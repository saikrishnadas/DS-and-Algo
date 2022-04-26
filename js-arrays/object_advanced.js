//JavaScript Object Accessors - Getters and Setters - Getters and setters allow you to define Object Accessors (Computed Properties).
/*
Why Using Getters and Setters?
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes
*/

const car = {
  name: "tesla",
  type: "electric",
  range: 350,
  color: "red",
  get clr() {
    return this.color;
  },
};

console.log(car.clr); //red - you don't have to call the function (car.clr()) if you have a getter function (get clr)

const newcar = {
  name: "tesla",
  type: "electric",
  range: 350,
  color: "",
  set clr(clr) {
    this.color = clr;
  },
};

newcar.clr = "black";
console.log(newcar.color); //black

//The Object.defineProperty() method can also be used to add Getters and Setters:
// Define object
const obj = { counter: 0 };

// Define setters
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(obj, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

//JavaScript Object Constructors
//object constructor function -Like a blueprint for a object- It is considered good practice to name constructor functions with an upper-case first letter.
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const MyName = new Person("sai", "krishna das", 23, "brown");
const MyFriend = new Person("saran", "ramesh", 23, "black");

// JavaScript Iterables
