"use strict";

function Rectangle(x1, y1, x2, y2) {
  this._x1 = x1;
  this._y1 = y1;
  this._x2 = x2;
  this._y2 = y2;
}
Rectangle.prototype.getX1 = function () {
  return this._x1;
};
Rectangle.prototype.setX1 = function (x1) {
  this._x1 = x1;
};

Rectangle.prototype.getX2 = function () {
  return this._x2;
};
Rectangle.prototype.setX2 = function (x2) {
  this._x2 = x2;
};

Rectangle.prototype.getY1 = function () {
  return this._y1;
};
Rectangle.prototype.setY1 = function (y1) {
  this._y1 = y1;
};

Rectangle.prototype.getY2 = function () {
  return this._y2;
};
Rectangle.prototype.setY2 = function (y2) {
  this._y2 = y2;
};

Rectangle.prototype.toString = function () {
  Object.prototype.toString.call(this);
  return (
    "Coordinates: (x1: " +
    this._x1 +
    "; y1: " +
    this._y1 +
    "), (x2: " +
    this._x2 +
    "; y2: " +
    this._y2 +
    ")"
  );
};

Rectangle.prototype.valueOf = function () {
  Object.prototype.valueOf.call(this);
  var firstSide = Math.abs(this._x1 - this._x2);
  var secondSide = Math.abs(this._y1 - this._y2);

  return (firstSide + secondSide) * 2;
};

var rec = new Rectangle(2, 8, 10, -2);

console.log(rec.toString());
console.log(rec.valueOf());
