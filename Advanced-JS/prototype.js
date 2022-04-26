function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const person1 = new Person("Sai", "Krishna");
const person2 = new Person("Saran", "Ramesh");

person1.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person1.getFullName()); //Output: Sai Krishna
// console.log(person2.getFullName()); //Output: Error (TypeError: person2.getFullName is not a function). Because person2 doesn't have a getFullName function.

//can create a prototype, so that all objects perons1...personN can access getFullName. function.prototype is present in all js functions.

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person1.getFullName()); //Output: Sai Krishna
console.log(person2.getFullName()); //Output: Saran Ramesh
