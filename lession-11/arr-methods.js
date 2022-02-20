"use strict";
const button11 = document.getElementById("11");
const button12 = document.getElementById("12");
const button13 = document.getElementById("13");
const button14 = document.getElementById("14");
const button15 = document.getElementById("15");
// const button16 = document.getElementById("16");
// const button17 = document.getElementById("17");
// const button18 = document.getElementById("18");

button11.addEventListener("click", spliceArr);
button12.addEventListener("click", sliceArr);
button13.addEventListener("click", concatArr);
button14.addEventListener("click", forEachArr);
button15.addEventListener("click", reduceArr);
// button16.addEventListener("click", arrToString);

const animals = ["Кот", "Черепаха", "Собакен", "Попугай"];

function spliceArr() {
  //arr.splice(index[, deleteCount, elem1, ..., elemN])
  console.log("animals: ", animals);
  // animals.splice(1, 1);
  animals.splice(1, 1, "Жираф", "Крокодил");
  console.log("animals: ", animals);
}
//Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0:

function sliceArr() {
  console.log("animals: ", animals);
  const newAnimals = animals.slice(1, 3);
  console.log("newAnimals: ", newAnimals);
}

//Можно вызвать slice и вообще без аргументов: arr.slice() создаёт копию массива arr.
//Это часто используют, чтобы создать копию массива для дальнейших преобразований, которые не должны менять исходный массив.

function concatArr() {
  console.log("animals: ", animals);
  const bigAnimal = ["Слон", "Носорог"];
  const resultArr = animals.concat(bigAnimal, ["Шиншила"], "Кошка");
  console.log("resultArr: ", resultArr);
}

function forEachArr() {
  animals.forEach((item, index, array) => {
    console.log("item: ", item);
    console.log("index: ", index);
    console.log("array: ", array);
  });
}

function searchArr() {
  let arr = [1, 0, false];

  alert(arr.indexOf(0)); // 1
  alert(arr.indexOf(false)); // 2
  alert(arr.indexOf(null)); // -1

  alert(arr.includes(1)); // true
}

// find и findIndex
const res = arr.find(function (item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});

// filter
// const resul = arr.filter(function (item, index, array) {
// если true - элемент добавляется к результату, и перебор продолжается
// возвращается пустой массив в случае, если ничего не найдено
// });

//map
const result = ["user", "user", "apple"].map(function (item, index, array) {
  return item + "ggggg";
});
console.log("result: ", result);

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [1, 2, 15];
arr.sort((a, b) => a - b);

//reverse
// Метод arr.reverse меняет порядок элементов в arr на обратный.

//split и join
// let names = 'Вася, Петя, Маша';
// let arr = names.split(', ');

const number = [2, 4, 6, 8, 10, 12, 14];
const initial = 1;

function reduceArr() {
  let result = number.reduce((previousValue, item, index, array) => {
    return item + previousValue;
  }, initial);
  console.log("result: ", result);
}
reduceArr();

// Array.isArray
