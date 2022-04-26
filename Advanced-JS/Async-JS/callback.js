//Any function that is passed as an argument to another function is called a callback function in javascript.

function greet(name) {
  console.log(`Hello! ${name}`);
}

function greetSai(greetFn) {
  // A function which accpets a function as an argument or returns a function is called as Higher Order Function
  const name = "Sai";
  greetFn(name); //callback function
}

greetSai(greet);

//Callbacks - Synchronous Callback (a callback that executes immediately) and Asynchonous Callback (Runs after sometime or after fetching a data)

//Drawback of callback- As more and more request has to be made based on the data obtained from the previous requests, developers started to encounter complex code and hard to maintaine which is called as callback hell.
//Promises is an alternative to callback and promises are recommended to use nowadays. (Promises are ES6 feature)
