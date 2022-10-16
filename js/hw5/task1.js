"use strict";

function digitSum(k) {
  return k
    .toString()
    .split("")
    .reduce(function (a, b) {
      return +a + +b;
    });
}

console.log(digitSum(222222)); // 12
