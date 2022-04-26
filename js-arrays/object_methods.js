const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); //John Doe
console.log(person.firstName.toUpperCase()); //JOHN

//Displaying a JavaScript object will output [object Object].
/*
Some common solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()
*/

//Displaying the Object using Object.values()
const car = {
  name: "tesla",
  type: "electric",
  range: 350,
};
const myArray_values = Object.values(car);
console.log(myArray_values); //[ 'tesla', 'electric', 350 ]

const myArray_keys = Object.keys(car);
console.log(myArray_keys); //[ 'name', 'type', 'range' ]

//Displaying the Object using JSON.stringify()
const myString = JSON.stringify(car);
console.log(myString); //{"name":"tesla","type":"electric","range":350}
