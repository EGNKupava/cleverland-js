"use strict";

const hi = (() => " Привет")();

// console.log("hi ", hi());

// ______________
// let a = {};
// let b = a;
// console.log(a === b);
// let c = {};
// let d = {};
// conslole.log(c === d);

let foo = (a, b, c, d) => a + b + c + d;

// console.log("foo: ", foo(1, 2));

// _________________________________________________

let add = function (a, b) {
  return a + b;
};

let add2 = add.bind(null, 2);

// console.log("isEqual", add2(10) === 12);

// https://gist.github.com/codedokode/ce30e7a036f18f416ae0
