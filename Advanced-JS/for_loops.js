/* for...of (v/s) for...in */

const cars = ["tesla", "bwm", "tata", "fisker"];

//for...of - majorly used for array.
for (const c of cars) {
  console.log(c);
  /* 
Output:
tesla
bwm
tata
fisker
*/
}

//but if you try using for...in with arrays if gives indexes.
for (const c in cars) {
  console.log(c);
  /* 
  Output:
   0
   1
   2
   3
  */
}

const bikes = {
  name: "Royal Enfield",
  variant: "Himalayan",
  color: "Black",
  mileage: 27,
};

//for...in - majorly used for objects.
for (const b in bikes) {
  console.log(b);
  /* 
  Output:
   name
   variant
   color
   mileage
  */
  //for...in used with objects returns there keys.
  //To get values,
  console.log(bikes[b]);
  /* 
  Output:
   Royal Enfield
   Himalayan
   Black
   27
  */
}

//but if you try using for...of with objects if gives error.
for (const b of bikes) {
  console.log(b);
  /* 
    Output: 
    TypeError: bikes is not iterable
    */
}

/* 
TO RECALL:
---------
for...of ---> Arrays
for...in ---> Objects
---------

'o'f -> not 'o'bjects, 'i'n -> not 'i'terables
*/
