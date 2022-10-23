"use strict";

var calculator = {
  num1: null,
  num2: null,
  read: function () {
    this.num1 = Number(prompt("Enter first number below: "));
    this.num2 = Number(prompt("Enter second number below: "));
  },
  sum: function () {
    if (typeof this.num1 === "number" && typeof this.num2 === "number") {
      alert("Result: " + this.num1 + this.num2);
    } else {
      alert(
        "Cannot multiple properties of " +
          typeof this.num1 +
          " and " +
          typeof this.num2
      );
    }
  },

  mul: function () {
    if (typeof this.num1 === "number" && typeof this.num2 === "number") {
      alert("Result: " + this.num1 * this.num2);
    } else {
      alert(
        "Cannot multiple properties of " +
          typeof this.num1 +
          " and " +
          typeof this.num2
      );
    }
  },
};

calculator.read();
calculator.mul();
