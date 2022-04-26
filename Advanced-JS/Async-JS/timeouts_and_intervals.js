/* setTimeout, clearTimeout, setInterval, clearInterval */

const { clearInterval } = require("timers");

function sayMyName() {
  console.log("Hello, Sai Krishna Das !");
}

function sayCustomName(customName) {
  console.log(`Hello ${customName}`);
}

function sayMyAge() {
  console.log("23 !");
}

// sayMyName();
// sayMyAge();

//SetTimeout
const greeting_name = setTimeout(sayMyName, 10000); //setTimeout(function_to_run, duration, param1, param2 )

//clearTimeout - clears the above timeout before it gets executed
clearTimeout(greeting_name);

//setInterval
const call_my_name = setInterval(sayMyName, 3000);

//clearInterval - clears the above interval before it gets executed
clearInterval(call_my_name);

setTimeout(sayCustomName, 3000, "Jithu");
setInterval(sayCustomName, 3000, "Sai");
