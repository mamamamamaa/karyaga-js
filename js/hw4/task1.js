"use strict";

// Task 1.

function pow(x, n) {
  var res = x;
  for (var i = 1; i < n; i += 1) {
    res *= x;
  }

  return res;
}

console.log(pow(2, 6));

// Task 2.

function min(...arg) {
  var min = arg[0];
  for (let i = 1; i < arg.length; i += 1) {
    if (min > arg[i]) {
      min = arg[i];
    }
  }
  return min;

  //   return Math.min(...arg);
}
console.log(min(4, 5, 45, 6, 2, 67));

// Task 3.

function sign(x) {
  return x < 0 ? -1 : x === 0 ? 0 : 1;
}

console.log(sign(13));
console.log(sign(0));
console.log(sign(-324));

// Task 4.

function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
}

console.log(calc(13, 4, 1));
console.log(calc(13, 4, 2));
console.log(calc(13, 4, 3));
console.log(calc(13, 4, 4));

// Task 5.

// function digitN(k, n) {
//   var arr = Array.from(String(k));
//   if (arr.length < n) {
//     return -1;
//   }
//   return Number(arr[arr.length - n]);
// }

//  або

function digitN(k, m) {
  var check = 1;

  for (var iterator3 = 1; iterator3 < m; iterator3++) {
    check *= 10;
  }

  if (m === 0 || k / check < 1) {
    return -1;
  }

  var digit = 0;

  var digitsOfNumbers = [];

  var iterator4 = 1;

  while (iterator4 <= k) {
    iterator4 *= 10;
  }

  while (iterator4 >= 1) {
    digitsOfNumbers[digit] = k % 10;
    k = k / 10 - digitsOfNumbers[digit] / 10;
    iterator4 /= 10;
    digit++;
  }

  return digitsOfNumbers[digit - m - 1];
}

console.log(digitN(12324324543, 8));
