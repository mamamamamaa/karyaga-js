"use strict";

var rectangle = (function () {
  var firstSide;
  var secondSide;

  function square() {
    return firstSide * secondSide;
  }
  function perimeter() {
    return (firstSide + secondSide) * 2;
  }

  return {
    setFirstSide: function (number) {
      firstSide = number;
    },
    setSecondSide: function (number) {
      secondSide = number;
    },
    square: function () {
      return square();
    },
    perimeter: function () {
      return perimeter();
    },
  };
})();
