//Hash Functions

//Simple Hash Example:
//Works only on strings
function hash(key, arrayLen) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    // map "a" to 1, "b" to 2, "c" to 3, etc
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

hash("pink", 10); //0
hash("pink", 10); //0
hash("pink", 10); //0, not matter how much time you call, we get less than 10, and always the same number

// Refining Our Hash function
// 1. Improve the time,run it closer to constant time
// 2. Could be little more random
function hashRefined(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    // map "a" to 1, "b" to 2, "c" to 3, etc
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
