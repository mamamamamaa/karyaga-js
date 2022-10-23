"use strict";

function MP3s(brand, cost, color) {
  this.brand = brand;
  this.cost = cost;
  this.color = color;
  this.currentSong = 1;
  this.isPlay = false;

  this.play = function () {
    this.isPlay = true;
  };

  this.stop = function () {
    this.isPlay = false;
  };

  this.nextSong = function () {
    this.currentSong += 1;
  };

  this.previousSong = function () {
    this.currentSong -= this.currentSong > 1 ? 1 : 0;
  };

  this.setSong = function (numb) {
    this.currentSong = numb > 0 ? numb : this.currentSong;
  };
}

var mp = new MP3s("sony", 1200, "black");
var mp1 = new MP3s("apple", 9999, "yellow");

console.log(mp);
console.log(mp1);
