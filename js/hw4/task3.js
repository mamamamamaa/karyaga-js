"use strict";

// Task 1

function square() {
  var side1 = 0;
  var side2 = 0;

  var arr = [];

  arr[0] = function (newSide1, newSide2) {
    if (newSide1 > 0 && newSide2 > 0) {
      side1 = newSide1;
      side2 = newSide2;
    }
  };

  arr[1] = function () {
    return side1 * side2;
  };

  return arr;
}

var figure = square();

figure[0](12, 10);

console.log(figure[1]());

figure[0](9, 5);

console.log(figure[1]());

//Task 2

function createArrayIterator(array) {
  var iterator = -1;
  return function () {
    iterator++;
    return array[iterator];
  };
}

var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined

// Task 3

var arr = [];

for (var i = 0; i <= 2; i++) {
  arr[i] = (function () {
    var j = i;
    return function () {
      return console.log(j);
    };
  })();
}

arr[0](); // 0
arr[arr.length - 1](); // 2
