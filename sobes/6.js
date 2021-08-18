"use strict";
const foo = () => {};

// console.log(typeof null);
//------------------------------

const cat = {
  name: "Kesha",
  sayMay() {
    console.log(`cat ${this.name} say may`);
  },
};
const dog = {
  name: "Bobik",
};

// setTimeout(cat.sayMay.bind(dog), 1);

function sum(a, b) {
  return a + b;
}

const summarize = sum.bind(null, 2, 3);

const res = summarize();
// console.log("res", res);

// const foo1 = (a) => (b) => (c) => console.log(a, b, c);

// foo1(1)(4)(5);

class Cat {
  constructor(name) {
    this.name = name;
  }
}
const cat1 = new Cat("Cesha");
console.log("cat: ", cat1);
