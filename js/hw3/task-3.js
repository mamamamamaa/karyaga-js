"use strict";

var arr = [];

arr.push(13);

arr.push("fsdfsd");

// Трохи не зрозумів зо малося на увазі під "будь-яке логічне значення"
arr.push(true);

arr.push(null);

alert(arr.length);

var numb = prompt("Enter your data: ", "your data");

arr.push(numb);

alert(arr[arr.length - 1]);
