function normalFunction() {
  console.log("Hello");
  console.log("World");
}

// normalFunction();

function* generatorFunction() {
  yield "Hello";
  yield "World";
}

const generatorObject = generatorFunction();
// console.log(generatorObject); //Object [Generator] {}
// console.log(generatorObject.next()); // { value: 'Hello', done: false }
// console.log(generatorObject.next().value); // Hello

// console.log(generatorObject.next().value); //Hello
// console.log(generatorObject.next().value); //World

for (const word of generatorObject) {
  console.log(word); /* Hello 
                    World */
}
