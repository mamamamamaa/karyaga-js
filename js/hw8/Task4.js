"use strict";
// Task1
// 1.Створіть масив з елементами " JavaScript", "Python";
// 2. Додайте в кінець елемент "Java";
// 3. Заміните передостанній елемент з кінця на
// "Kotlin". Код заміни повинен бути універсальним, тобто працювати для
// масивів будь-якої довжини;
// 4. Видаліть перший елемент масиву и виведить його у
// консоль;
// 5. Додайте в початок елементи "Basic" і "Pascal".
//     Масив в результаті кожного кроку:
//     1. ["JavaScript", "Python"]
// 2. ["JavaScript", "Python ", "Java"]
// 3. ["JavaScript ", "Kotlin", "Java"]
// 4. ["Kotlin", "Java"]
// 5. ["Basic", "Pascal", "Kotlin", "Java"]

var arrTask1 = ["JavaScript", "Python"];
console.log(arrTask1);

arrTask1.push("Java");
console.log(arrTask1);

arrTask1.splice(arrTask1.length - 2, 1, "Kotlin");
console.log(arrTask1);

console.log(arrTask1.shift());
console.log(arrTask1);

arrTask1.unshift("Pascal");
arrTask1.unshift("Basic");
console.log(arrTask1);

// Task2
//
// Розширте тип об'єктів Array методом sortDesc(), який сортує масив за спаданням.
//
// // Ваш код
Array.prototype.sortDesc = function () {
  this.sort(function (a, b) {
    return b - a;
  });
};
var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]

// Task3
//
// Напишіть функцію deleteEvenNumbers(array), яка приймає масив array, видаляє з масиву array парні числа та повертає його.

function deleteEvenNumbers(array) {
  return array.filter(function (el) {
    return el % 2 !== 0;
  });
}
var arr1 = [1, 2, 3, 4, 5];
var arr2 = deleteEvenNumbers(arr1);
console.log(arr2); // [1, 3, 5]

// Task4
//
// Є наступний код
// Перепишіть код, замінивши цикл for на метод map().
var arr3 = ["Tom", "Sam", "Bob"];
var arrLength = arr3.map(function (el) {
  return "<li>" + el + "</li>";
});

console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]

// Task5

// Напишіть функцію matrixToArray(matrix), яка приймає двовимірний масив (матрицю) matrix, розгортає двовимірний масив у одновимірний та повертає його. Це завдання необхідно вирішити за допомогою акумулюючих методів.

function matrixToArray(matrix) {
  return matrix.reduce(function (acc, el) {
    for (var i = 0; i < el.length; i++) {
      acc.push(el[i]);
    }
    return acc;
  }, []);
}
var arr4 = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr5 = matrixToArray(arr4);
console.log(arr5); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
