"use strict";
function addTwoDays(date) {
  date.setHours(48);
}
var newDate = new Date();
addTwoDays(newDate);
console.log(newDate.toLocaleDateString());
