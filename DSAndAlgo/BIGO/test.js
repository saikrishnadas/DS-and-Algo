const { performance } = require("perf_hooks");

// O(n) -> as input n increases the time increase - linear
function addToN(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// O(1) -> as input n increases the time constant - constant
function addToN(n) {
  return (n * (n + 1)) / 2;
}

var t1 = performance.now();
addToN(100000000);
var t2 = performance.now();
console.log(`Time Taken: ${(t2 - t1) / 1000} sec`);

// O(n^2) -> as input n increases the time increase twice - quadratic
function addToN(n) {
  let sum = 0;
  let sum2 = 0;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      sum2 += j;
    }
    sum += i;
  }
  return sum + sum2;
}
