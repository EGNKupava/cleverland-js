"use strict";

function Dog(name) {
  this.name = name;
  this.color = "dark";
  this.bark = function () {
    alert(`${this.name} сказал  BARK!!!`);
  };
}

function Cat(name) {
  this.name = name;
  this.color = "white";
}

const dogBarbos = new Dog("BARBOS");
const catKesha = new Cat("Kesha");

let dogBobik = {
  name: "BOBIK",
  color: "grey",
  bark: function () {
    alert(`${this.name} сказал  BARK!!!`);
  },
};

let catBarsik = {
  name: "BARSIK",
  color: "white",
  bark: function () {
    alert(`${this.name} say  BARK!!!`);
  },
};

dogBarbos.bark.call(catKesha); //Вызов от имени catBarsik
dog.bark.call(dogBobik); //Вызов от имени catBarsik
dog.bark.call(catBarsik); //Вызов от имени catBarsik
