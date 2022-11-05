"use strict";

// Task 1.
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

function sumSliceArray(arr, first, second) {
  if (!Array.isArray(arr)) {
    throw new Error("Where is array, dude?");
  } else if (!Number(first) || !Number(second)) {
    throw new Error("Where are numbers, dude?");
  } else if (first > arr.length || second > arr.length) {
    throw new Error("One of numbers more than array size");
  } else {
    return arr[first] + arr[second];
  }
}

sumSliceArray([1, 3, 4, 52, 34], 2, 4);
console.log(sumSliceArray([1, 3, 4, 52, 34], 2, 4));

// Task 2.
// Візьміть функцію sumSliceArray(arr, first, second) з попереднього завдання та напишіть код, який її використовує, але перед використанням перевіряє всі параметри на правильність. Таким чином, ніколи не повинні генеруватися винятки, які є всередині цієї функції.

function newSumSliceArray(arr, first, second) {
  if (!Array.isArray(arr)) {
    throw new Error("Where is array, dude?");
  } else if (!Number(first) || !Number(second)) {
    throw new Error("Where are numbers, dude?");
  } else if (first > arr.length || second > arr.length) {
    throw new Error("One of numbers more than array size");
  } else {
    return sumSliceArray(arr, first, second);
  }
}

newSumSliceArray([1, 3, 4, 52, 34], 2, 4);
console.log(newSumSliceArray([1, 3, 4, 52, 34], 2, 4));
