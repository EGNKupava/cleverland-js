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
// console.log("mySum1: ", mySum1);

const sumNumber = (a, b = 5) => a + b;

// const result = sumNumber(1, 3);
// console.log("result: ", result);

// const result2 = sumNumber(1);
// console.log("result2: ", result2);

function sayHi(age) {
  let c = addNumber(1, 2, 4);
  return c;
}

// let userAge = prompt("your age");

// sayHi(userAge);

const getMin = (a, b, c) => Math.min(a, b, c);

const factorial = (a) => {
  if (a >= 1) {
    let acc = 1;
    for(let i = 1; i <= a; i++) {
      acc = i * acc;
    }
    return acc;
  }
}

const factorial2 = factorial;

const callFoo = () => {
  const name = 'Vasya';
  return name;
}

const name2 = callFoo();

console.log('name: ', name);

let userNum = Number(prompt("put a numer", ""));

function returnNum() {
  if (userNum >= 10){
    return userNum * userNum;
  }

  if(userNum < 7){
    alert("small numer");
    return userNum;
    } else {
    return userNum;
}

}

const answer = returnNum();
alert(answer);
