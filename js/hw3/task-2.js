"use strict";

var x = 1;
var y = 2;
var res1 = String(1) + 2; // Допишіть код, необхідно використовувати змінні x та y
console.log(res1); // "12"
console.log(typeof res1); // "string"

var res2 = String(Boolean(x)) + y; // Допишіть код, необхідно використовувати змінні x та y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

var res3 = Boolean(x + y); // Допишіть код, необхідно використовувати змінні x та y
console.log(res3); // true
console.log(typeof res3); // "boolean"

var res4 = Number.NaN + x + y; // Допишіть код, необхідно використовувати змінні x та y
console.log(res4); // NaN
console.log(typeof res4); // "number"
