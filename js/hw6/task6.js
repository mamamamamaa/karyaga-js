"use strict";

// Task 1

var user = {
  name: "Tom",
};
function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}
var tomFormat = format.bind(user);

tomFormat("<<<", ">>>"); // "<<<Tom>>>"

// Task 2

function mul(a, b) {
  return a * b;
}

var doubleMul = mul.bind(null, 2); // Ваш код
var qudraMul = mul.bind(null, 4); // Ваш код
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20

// Task 3

function bind(func, context) {
  return function () {
    var uuid = Date.now().toString();
    context[uuid] = func;
    var res = context[uuid]();
    delete context[uuid];
    return res;
  };
}
function func() {
  console.log(this.name + " - " + this.age);
}
var user = {
  name: "Tom",
  age: 20,
};
var f = bind(func, user);
f(); // "Tom – 20"
