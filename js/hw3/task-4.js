"use strict";

//==== Task-1 ====

var task1 = Number(prompt("<Task-1> Enter your number", 0));

// Один варінт
// task1 = task1 > 0 ? task1 + 1 : task1 < 0 ? task1 - 2 : 10;

// console.log("task1: " + task1);

// Другий варіант
if (task1 > 0) {
  task1 += 1;
} else if (task1 < 0) {
  task1 -= 2;
} else {
  task1 = 10;
}

console.log("task1: " + task1);

//==== Task-2 ====

var task2 = Number(prompt("<Task-2> Enter your number", 0));

if (task2 === 0) {
  console.log("Нульове число");
} else if (task2 % 2 === 0) {
  if (task2 > 0) {
    console.log("Додатнє парне");
  } else {
    console.log("Від'ємне парне");
  }
} else if (task2 % 2 !== 0) {
  if (task2 > 0) {
    console.log("Додатнє непарне");
  } else {
    console.log("Від'ємне непарне");
  }
}

//==== Task-3 ====

var task3 = [12, 12, 12, 99];

if (task3[0] === task3[1] && task3[0] === task3[2]) {
  console.log(4);
} else if (task3[1] === task3[2] && task3[1] === task3[3]) {
  console.log(1);
} else if (task3[2] === task3[3] && task3[2] === task3[0]) {
  console.log(2);
} else {
  console.log(3);
}

//==== Task-4 ====

var task4 = Number(prompt("<Task-4> Enter your number", 0));

switch (task4) {
  case 1: {
    console.log("Погано");
    break;
  }
  case 2: {
    console.log("Незадовільно");
    break;
  }
  case 3: {
    console.log("Задовільно");
    break;
  }
  case 4: {
    console.log("Добре");
    break;
  }
  case 5: {
    console.log("Відмінно");
    break;
  }
  default: {
    console.log("Помилка");
  }
}
