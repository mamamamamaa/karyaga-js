"use strict";

// Task 1

function mul(...arg) {
  var sum = 0;
  for (let i = 0; i < arg.length; i++) {
    if (typeof arg[i] === "number") {
      sum += arg[i];
    }
  }
  return sum;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// Task 2

function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}

var country = {
  name: "Ukraine",
  language: "ukrainian",
  capital: {
    name: "Kyiv",
    population: 2907817,
    area: 847.66,
  },
};
format.call(country, "<", ">"); // "<Ukraine>"
format.apply(country, ["[", "]"]); // "[Ukraine]"
format.call(country.capital, '"', '"'); // ""Kyiv""
format.apply(country.capital, ["", ""]); // "Kyiv"
