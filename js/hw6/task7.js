"use strict";

function MP3s(brand, cost, color) {
  this.brand = brand;
  this.cost = cost;
  this.color = color;
  this.currentSong = 1;
  this.isPlay = false;
}

MP3s.prototype.play = function () {
  this.isPlay = true;
};
MP3s.prototype.stop = function () {
  this.isPlay = false;
};
MP3s.prototype.nextSong = function () {
  this.currentSong += 1;
};
MP3s.prototype.previousSong = function () {
  this.currentSong -= this.currentSong > 1 ? 1 : 0;
};
MP3s.prototype.setSong = function (numb) {
  this.currentSong = numb > 0 ? numb : this.currentSong;
};

var mp = new MP3s("sony", 1200, "black");

mp.play();

console.log(mp.isPlay);

mp.nextSong();

console.log(mp.isPlay);

console.log(mp.currentSong);

mp.stop();

console.log(mp.isPlay);
