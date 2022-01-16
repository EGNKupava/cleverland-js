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

const add = function (a, b, c) {
  return a + b + c;
};

const add2 = add.bind(null, 5);

console.log(add2(1, 2, 3));

// https://gist.github.com/codedokode/ce30e7a036f18f416ae0

// создать массив где элемент массива равен его длинне

const arr = Array.from(new Array(5), (item, index) => ++index);
console.log(arr);
