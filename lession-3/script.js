"use strict";

let x = 3;
let y = 7;
let xySum = x + y;
console.log("xySum", xySum);

let xString = "3";
let yString = "7";
let sumString = xString + yString;

console.log("sumString", sumString);

// Обратите внимание, если хотя бы один операнд является строкой, то второй будет также преобразован к строке.

let yString1 = 7;
let xString1 = "3";
let sumString1 = xString1 + yString1;

console.log("sumString1", sumString1);

let sumString2 = +xString1 + yString1;
console.log("sumString2: ", sumString2);

// Унарный минус ставится перед своим операндом и возвращает его математическое отрицание

// Остаток от деления %

let myCost = 10;
let person = 3;

let ost = myCost % person;
console.log("ost ", ost);

// Инкремент/декремент

let value = 0;
value++;
value++;
console.log("value: ", value);
value--;
console.log("value: ", value);

let myVal = 0;
let myVal1 = 0;

let a = ++myVal;

let b = myVal1++;
console.log("a: ", a);
console.log("b: ", b);
