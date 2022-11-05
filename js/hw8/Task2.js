"use strict";

//Task-1
var str = "Login1, LOgin2, login3, loGin4";

console.log(str.toLowerCase().split(","));

//Task-2

var inputs = [];
while (true) {
  var input = prompt("Enter your string below: ");
  if (input.toLowerCase() === "end") {
    break;
  }
  inputs.push(input);
}

function checkNumbers(data) {
  var result = [];
  for (var string of data) {
    var numbs = [];
    for (var symbol of string) {
      if (Number(symbol)) {
        numbs.push(symbol);
      }
    }
    result.push({ input: string, output: numbs.join("") });
  }
  console.log("+-----------------+---------------------+");
  for (var { input, output } of result) {
    var numb = output ? "Numbers: " + output : "No numbers";
    console.log("| " + input + " | " + numb + " |");
    console.log("+-----------------+---------------------+");
  }
  return result;
}

checkNumbers(inputs);
