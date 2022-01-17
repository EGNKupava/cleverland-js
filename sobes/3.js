"use strict";

let cleverland = "Cleverland";

// console.log(cleverland[0]);

// cleverland[0] = "H";

// console.log(cleverland);
// __________________________________________________

// let myArr = [];

// if (myArr) {
//   console.log("Привет");
// } else {
//   console.log("Пока");
// }

// __________________________________________________

// let myObj = {};

// if (myObj) {
//   console.log("Привет");
// } else {
//   console.log("Пока");
// }

// __________________________________________________

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

//_________________________________________________

// unicue sort arr
let arr = [1, 4, 3, 2, 1, 4]; // Нужно [1, 2, 3, 4]

let newArr = [];
arr.forEach((item) => {
  if (!newArr.includes(item)) newArr.push(item);
});

// let newArr = arr.reduce((acc, item) => {
//   if (!acc.includes(item)) acc.push(item);
//   return acc;
// }, []);
newArr = newArr.sort((a, b) => a - b);
console.log("newArr: ", newArr);

const func1 = () => {
  let counter = 0;
  return () => {
    ++counter;
    console.log(counter);
  };
};

const showFoo = func1();

showFoo();
showFoo();
showFoo();

function sequence(start = 0, step = 1) {
  let counter = 0;
  let acc = start;
  return () => {
    if (counter) {
      return (acc = acc + step);
    }
    counter++;
    return acc;
  };
}

var gen2 = sequence(0, 2);
function take(func, num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(func());
  }
  return arr;
}
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]

// var generator = sequence(10, 3);
// var generator2 = sequence(7, 1);

// console.log(generator()); // 10
// console.log(generator()); // 13

// console.log(generator2()); // 7

// console.log(generator()); // 16

// console.log(generator2()); // 8

function square(x) {
  return x * x;
} // возведение в квадрат
function map(func, arr) {
  let newArr = [];
  arr.forEach((item) => newArr.push(func(item)));
  return newArr;
}

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); //
