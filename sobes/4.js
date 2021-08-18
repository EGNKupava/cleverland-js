"use strict";

const hi = (() => "Привет")();

// console.log("hi ", hi);

// ______________
// let a = {};
// let b = a;
// console.log(a === b); // true
// let c = {};
// let d = {};
// conslole.log(c === d); // false

let foo = (a, b, c = 0, d = 0) => a + b + c + d;

// console.log("foo: ", foo(1, 2));

// _________________________________________________

let add = function (a, b, c) {
  return a + b + c;
};

let add2 = add.bind(null, 2);

console.log("isEqual", add2(10, 11));

// https://gist.github.com/codedokode/ce30e7a036f18f416ae0
