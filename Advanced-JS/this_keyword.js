/* 
How to determine 'this'?

Implicit binding
Explicit binding
New buiding
Default binding 
*/

// Implicit binding
const person = {
  name: "Sai",
  sayMyName: function () {
    console.log(`Implicit binding : My name is ${this.name}`);
  },
};

person.sayMyName();

/**
output: 
Implicit binding : My name is Sai
**/

// Explicit binding
function sayMyName() {
  console.log(`Explicit binding : My name is ${this.name}`);
}

sayMyName.call(person); //every js function has a 'call'

/**
output: 
Explicit binding : My name is Sai
**/

// New buiding
function Person(name) {
  //this = {}
  this.name = name; //this keyword here will always reference a new empty object
}

const p1 = new Person("Sai");
const p2 = new Person("Krishna");

console.log(p1.name, p2.name);

/**
output: 
Sai Krishna
**/

// Default binding : if none of the above three rules are satisfied , js will default to global scope and set this keyword to global object.
sayMyName();

/**
output: 
My name is undefined
**/
