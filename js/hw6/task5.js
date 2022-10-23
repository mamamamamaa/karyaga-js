"use strict";

//Task 1
function AudioPlayer(number) {
  this.__volume = 0; // Приватна властивість

  if (this.volumeValid(number)) {
    this.__volume = number;
  }
}

AudioPlayer.prototype.getVolume = function () {
  return this.__volume;
};

AudioPlayer.prototype.setVolume = function (number) {
  if (this.volumeValid(number)) {
    this.__volume = number;
  }
};

AudioPlayer.prototype.volumeValid = function (number) {
  if (number >= 0 && number <= 100) {
    return true;
  } else {
    return false;
  }
};

AudioPlayer.prototype.volume = function (number) {
  if (number === undefined) {
    return this.__volume;
  } else {
    if (this.volumeValid(number)) {
      this.__volume = number;
    }
  }
};

var player = new AudioPlayer(20);

console.log(player.volume()); // 9

player.volume(99);

console.log(player.volume()); // 16

// Task2

function Summator() {
  this.__firstNumber = 0;
  this.__secondNumber = 0;

  this.result = 0;
}

Summator.prototype.setFirtst = function (numb) {
  if (this.validator(numb)) {
    this.__firstNumber = numb;
    this.__calc();
  }
};
Summator.prototype.setSecond = function (numb) {
  if (this.validator(numb)) {
    this.__secondNumber = numb;
    this.__calc();
  }
};
Summator.prototype.getFirtst = function () {
  return this.__firstNumber;
};
Summator.prototype.getFirtst = function () {
  return this.__secondNumber;
};
Summator.prototype.__calc = function () {
  this.result = this.__firstNumber + this.__secondNumber;
};

Summator.prototype.validator = function (numb) {
  return typeof numb === "number";
};

var sum = new Summator();

sum.setFirtst(10);

console.log(sum.result);

sum.setSecond(123);

console.log(sum.result);
