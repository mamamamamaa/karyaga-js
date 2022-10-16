"use strict";

function create(topString) {
  return function (downString) {
    return downString === topString;
  };
}

var tom = create("pass_for_Tom");

console.log(tom("pass_for_Tom"));
console.log(tom("pass_for_tom"));
