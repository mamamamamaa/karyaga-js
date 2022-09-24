"use strict";

//==== Task-1 ====
var k = 123435543;
var l = 3245;
while (k > l) {
  k -= l;
}
console.log(k);

//==== Task-2 ====
var n = 54752423;
var iterator = 1;
while (iterator < n) {
  iterator *= 10;
  var smth = n % iterator;
  console.log(parseInt((smth / iterator) * 10));
}

//==== Task-3 ====
var z = 23;
var x = 99;
var sum = 0;
for (var index = z; index <= 99; index++) {
  sum += index;
}
console.log("sum", sum);

//==== Task-4 ====
var numb = 10;
var mult = 1;
for (var i = 1; i <= numb; i++) {
  mult *= i;
}
console.log("mult", mult);

//==== Task-5 ====

var promptRes;
var resArr = [];
var resSum = 0;

while (true) {
  promptRes = prompt("Ender your data: ");

  if (promptRes === "" || Number(promptRes) === NaN || promptRes === null) {
    break;
  } else {
    resArr.push(Number(promptRes));
  }
}

for (var j = 0; j < resArr.length; j++) {
  resSum += resArr[j];
}
console.log("resSum", resSum);

//==== Task-6 ====

var o = 54;
var p = 79;

for (var y = o, it = 1; y <= p; y++, it++) {
  for (var e = 0; e < it; e++) {
    console.log(y);
  }
}
