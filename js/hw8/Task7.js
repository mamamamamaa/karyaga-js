"use strict";

function random(min, max, delay, callback) {
  var numb = null;
  var error = null;
  if (min < max) {
    numb = Math.random() * max * min;
  } else {
    error = new Error("Min > Max, sry dude ^(");
  }

  setTimeout(callback(error, numb), delay);
}
random(1, 100, 2000, function (error, data) {
  if (data) {
    console.log(data);
  } else {
    console.log(error);
  }
});
random(1000, 100, 3000, function (error, data) {
  if (data) {
    console.log(data);
  } else {
    console.error(error);
  }
});
