"use strict";

// addNumber(3, 5);

function addNumber(a, b = 3) {
  if (a + b === 4) {
    return;
  } else {
    let sum = a + b;
    return sum;
  }
}

const mySum1 = addNumber(1);
console.log("mySum1: ", mySum1);

const sumNumber = (a, b = 5) => a + b;

// const result = sumNumber(1, 3);
// console.log("result: ", result);

// const result2 = sumNumber(1);
// console.log("result2: ", result2);

function sayHi(age) {
  let c = addNumber(1, 2, 4);
  return c;
}

let userAge = prompt("your age");

sayHi(userAge);

const getMin = (a, b, c) => Math.min(a, b, c);
