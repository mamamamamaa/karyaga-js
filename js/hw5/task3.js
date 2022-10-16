"use strict";
// Task 1
var user = {};

user.name = "Cris";

user.surname = "Simons";

console.log("до зміни імені");
console.log(user);

user.name = "Brain";

console.log("після зміни імені");
console.log(user);

delete user.name;

console.log("після видалення імені");
console.log(user);

// Task 2

//  Звичайний
var car1 = {};

car1.model = "X7";

car1.speed = 320;

car1.run = function () {
  return this.model + " їде зі швидкістю " + this.speed;
};
car1.stop = function () {
  return this.model + " зупинилась";
};

// Масивів

var car2 = {};

car2["model"] = "X7";

car2["speed"] = 320;

car2["run"] = function () {
  return this.model + " їде зі швидкістю " + this.speed;
};
car2["stop"] = function () {
  return this.model + " зупинилась";
};

// Спрощений
var car3 = {
  model: "X7",

  speed: 320,

  run: function () {
    return this.model + " їде зі швидкістю " + this.speed;
  },
  stop: function () {
    return this.model + " зупинилась";
  },
};

console.log(car1);
console.log(car2);
console.log(car3);

// Task 3

var tv = {
  currentChannel: 1,
  nextChannel: function () {
    this.currentChannel += 1;
  },

  previousChannel: function () {
    this.currentChannel -= this.currentChannel > 1 ? 1 : 0;
  },

  setChannel: function (numb) {
    this.currentChannel = numb > 0 ? numb : this.currentChannel;
  },
};

console.log(tv.currentChannel);
tv.nextChannel();

console.log(tv.currentChannel);

tv.previousChannel();
tv.previousChannel();
tv.previousChannel();

console.log(tv.currentChannel);

// Task 4

var mp3 = {
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

// Task 5

var team = [
  {
    name: "John",
    age: 28,
    experiance: 1,
    languages: ["Java", "JavaScript", "SQL"],
  },
  {
    name: "Bill",
    age: 30,
    experiance: 5,
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Mike",
    age: 32,
    experiance: 4,
    languages: ["Python", "SQL"],
  },
];

// Task 6

function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}

console.log(isEmpty({ name: "bebebe" }));

console.log(isEmpty({}));

// Task 7

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

function salary(obj) {
  return (
    Object.values(obj).reduce((acc, el) => el + acc, 0) /
    Object.values(obj).length
  );
}

console.log(salary(salaries1));
console.log(salary(salaries2));
