"use strict";

//==== Task-1 ====
var a = prompt("Введіть довжину стороні квадрата", 10);
alert("Площа квадрата: " + a * a);

//==== Task-2 ====
var natural = 29;
var first = parseInt(natural / 10);
var second = natural % 10;
alert("first: " + first + "\n" + "second: " + second);

//==== Task-3 ====
var k = 42;
var m = 3;
if (k > 2 && m <= 3) {
  alert("Істина");
} else {
  alert("Хиба");
}
//==== Task-4 ====
var z = 13;
var x = 90;
var c = 123;

if (z < x && x < c) {
  alert("Істина");
} else {
  alert("Хиба");
}
//==== Task-5 ====

var q = 233;
var test1 = q / 100;
var test2 = q % 2;
if (test1 >= 1 && test1 < 10 && test2 !== 0) {
  alert("Істина");
} else {
  alert("Хиба");
}
