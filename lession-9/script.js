"use strict";

function Dog(name) {
  this.name = name;
  this.color = "dark";
  this.bark = function () {
    alert(`${this.name} сказал  BARK!!!`);
  };
}

const dogBarbos = new Dog("BARBOS");

let dogBobik = {
  name: "BOBIK",
  color: "grey",
  bark() {
    alert(`${this.name} сказал  Привет`);
  },
};
console.log("dogBobik: ", dogBobik);
function Cat(name) {
  this.name = name;
  this.color = "white";
}

const catKesha = new Cat("Kesha");

let catBarsik = {
  name: "BARSIK",
  color: "white",
};

dogBarbos.bark();
dogBarbos.bark.call(catKesha); //Вызов от имени catBarsik
dogBobik.bark.call(catBarsik); //Вызов от имени catBarsik
