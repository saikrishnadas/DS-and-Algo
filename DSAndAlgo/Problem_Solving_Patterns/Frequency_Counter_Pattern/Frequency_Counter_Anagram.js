/* Question: Given two string, write a function to determine if the second string is an anagram of the first. 
An Anagram is a word, phrase or name formaed by rearranging the letters of another, such as cinema, formaed from iceman.
Sample I/O:
validAnagram('','') //true
validAnagram('aaz','zza') //false
validAnagram('anagram','nagaram') //true
validAnagram('rat','car') //false
validAnagram('awesome','awesom') //false
validAnagram('qwerty','qeywrt') //true
*/

function vaildAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    console.log("false");
    return false;
  }

  if (str1.length === 0 && str2.length === 0) {
    console.log("true");
    return true;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      console.log("false");
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
}

const str1 = "awesome";
const str2 = "awesom";

vaildAnagram(str1, str2);

//ALTERNATIVE SOLUTION:
function validAnagram2(first, second) {
  if (first.length !== second.length) {
    //If the lengths of two string is not equal return false
    console.log("false");
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    //loop through first string a get the frequency of the string and add it to lookup object
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1); //if already letter is there, increment the count else set it to 1
  }

  for (let i = 0; i < second.length; i++) {
    //loop through second string
    let letter = second[i];
    if (!lookup[letter]) {
      //if letter is not there return false
      return false;
    } else {
      lookup[letter] -= 1; //if letter is there decrement the count
    }
  }
  return true; //when all letter count reaches 0, it will return true
}

const first = "awesome";
const second = "awesom";

validAnagram2(first, second);
