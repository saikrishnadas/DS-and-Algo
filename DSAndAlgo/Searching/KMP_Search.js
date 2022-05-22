/* 
KMP (Knuth Morris Pratt) Pattern Searching:
The KMP matching algorithm uses degenerating property (pattern having same sub-patterns appearing more than once in the pattern) of the pattern 
and improves the worst case complexity to O(n). 
The basic idea behind KMP’s algorithm is: whenever we detect a mismatch (after some matches), 
we already know some of the characters in the text of the next window. 
We take advantage of this information to avoid matching the characters that we know will anyway match.
*/
//check : https://www.youtube.com/watch?v=mAqsI9Jw1RI

// Prefix Table
function buildPrefixTable(substring) {
  const table = [0];
  let i = 1;
  let j = 0;
  while (i < substring.length) {
    if (substring[i] === substring[j]) {
      j += 1;
      table[i] = j;
      i += 1;
    } else if (j > 0) {
      j = table[j - 1];
    } else {
      table[i] = 0;
      i += 1;
    }
  }
  return table;
}

// Main Function
function KmpSearch(string, substring) {
  if (substring === "") return 0;
  const prefixTable = buildPrefixTable(substring);
  let i = 0;
  let j = 0;
  while (i < string.length && j < substring.length) {
    if (string[i] === string[j]) {
      i += 1;
      j += 1;
    } else if (j > 0) {
      j = prefixTable[j - 1];
    } else {
      i += 1;
    }
  }
  if (j === substring.length) {
    return i + j; //index at which the substring is found
  }
  return -1;
}

/* 
BIG O:

Time:
Worst Case - O(n+m)
n - length of string (long)
m - length of substring (short)

Space:
O(m)
*/
