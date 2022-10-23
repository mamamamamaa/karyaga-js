"use strict";

// Task 1
function MP3s(brand, cost, color) {
  return {
    brand,
    cost,
    color,
    currentSong: 1,
    isPlay: false,

    play: function () {
      this.isPlay = true;
    },

    stop: function () {
      this.isPlay = false;
    },

    nextChannel: function () {
      this.currentSong += 1;
    },

    previousSong: function () {
      this.currentChannel -= this.currentSong > 1 ? 1 : 0;
    },

    setSong: function (numb) {
      this.currentChannel = numb > 0 ? numb : this.currentChannel;
    },
  };
}

var blackMP3 = MP3s("sony", 1200, "black");
console.log(blackMP3);

// Task 2
var salaries1 = {
  John: 100,
  Bill: 300,
  Mike: 250,
};
var salaries2 = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50,
};

function maxSalary(obj) {
  var salaries = Object.values(obj);
  var max = salaries[0];
  for (var i = 1; i < salaries.length; i++) {
    if (max < salaries[i]) {
      max = salaries[i];
    }
  }
  return max;
}

console.log(maxSalary(salaries1));
console.log(maxSalary(salaries2));
