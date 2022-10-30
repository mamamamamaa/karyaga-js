"use strict";

// Task 1.
// Створіть тип об'єктів Геометрична фігура, визначте в ньому приватні властивості для встановлення центру фігури. Для доступу до цих властивостей визначте необхідний метод/методи.
// На основі цього типу створіть два нових типи (спадкоємці) - Прямокутник і Коло. У цих типах визначте особливі приватні характеристики. (Наприклад, довжина діагоналі для Прямокутника та радіус для Круга). До кожного з типів додайте публічний метод info(), який виводить на екран всю доступну інформацію про фігуру.

function Figure(x = 0, y = 0) {
  this._centerX = x;
  this._centerY = y;
}
Figure.prototype.getX = function () {
  return this._centerX;
};
Figure.prototype.getY = function () {
  return this._centerY;
};
Figure.prototype.setCenter = function (x = this._centerX, y = this._centerY) {
  this._centerX = x;
  this._centerY = y;
};

function Circle(x = 0, y = 0, radius = 1) {
  Figure.call(this, x, y);
  this._radius = radius;
}
Circle.prototype = Object.create(Figure.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getRadius = function () {
  return this._radius;
};
Circle.prototype.setRadius = function (radius) {
  this._radius = radius;
};
Circle.prototype.info = function () {
  console.log(
    "Center coordinates: x = " +
      this._centerX +
      "; y = " +
      this._centerY +
      ";\nRadius: R = " +
      this._radius
  );
};

function Rectangle(x = 0, y = 0, diagonal = 1) {
  Figure.call(this, x, y);
  this._diagonal = diagonal;
}
Rectangle.prototype = Object.create(Figure.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getDiagonal = function () {
  return this._diagonal;
};
Rectangle.prototype.setDiagonal = function (diagonal) {
  this._diagonal = diagonal;
};
Rectangle.prototype.info = function () {
  console.log(
    "Center coordinates: x = " +
      this._centerX +
      "; y = " +
      this._centerY +
      ";\nDiagonal: d = " +
      this._diagonal
  );
};

var circle = new Circle(12, 23, 10);
var rectangle = new Rectangle(32, 10, 13);

circle.info();
rectangle.info();

// Task 2.
// Поліморфізм
// Створіть тип об'єктів Квадрат, визначте захищену властивість для збереження значення сторони. Для доступу до цієї властивості визначте необхідний метод/методи. Визначте також публічний метод, який повертає периметр.
// На основі цього типу створіть тип Куб та перевизначте метод отримання периметра.
//     Реалізуйте 2 версії поточного завдання, використовуючи такі способи перевизначення:
//     1. Без розширення (повністю перевизначити метод батьківського типу);
//     2. З розширенням (використовувати результат методу батьківського типу  для подальших розрахунків).

function Square(side = 1) {
  this._side = side;
}
Square.prototype.getSide = function () {
  return this._side;
};
Square.prototype.setSide = function (side) {
  this._side = side;
};
Square.prototype.getPerimeter = function () {
  return this._side * 4;
};

function Cub(side) {
  Square.call(this, side);
}

Cub.prototype = Object.create(Square.prototype);
Cub.prototype.constructor = Cub;
Cub.prototype.getPerimeter1 = function () {
  return this._side * 12;
};
Cub.prototype.getPerimeter2 = function () {
  Square.prototype.getPerimeter.call(this);
  return this._side * 12;
};

var square = new Square(10);
var cub = new Cub(8);

console.log(square.getPerimeter());
console.log(cub.getPerimeter1());
console.log(cub.getPerimeter2());
