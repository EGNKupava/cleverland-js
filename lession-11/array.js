"use strict";
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");

button1.addEventListener("click", addItem);
button2.addEventListener("click", deleteLastItem);
button3.addEventListener("click", addFirstItem);
button4.addEventListener("click", deleteFirstItem);

button5.addEventListener("click", iterateArr);
button6.addEventListener("click", arrToString);
// button7.addEventListener("click", deleteFirstItem);
// button8.addEventListener("click", deleteFirstItem);
//--------------------------------------------------

const cards = new Array();

const users = ["Алексей", "Иван", "Николай", "Григорий"];
console.log("users: ", users);
console.log("users.length: ", users.length); // Длина массива

// Обращение к элементу с n индексом
console.log("users[1]: ", users[1]);

const usersData = [
  {
    name: "Алексей",
    age: 18,
  },
  {
    name: "Иван",
    age: 18,
  },
  {
    name: "Николай",
    age: 18,
  },
  {
    name: "Григорий",
    age: 18,
  },
];

// Методы массивов
function addItem() {
  users.push("Андрей", "BObik");
  console.log("users: ", users);
}

function deleteLastItem() {
  const lastUser = users.pop();
  console.log("lastUser: ", lastUser);
  console.log("users: ", users);
}

function addFirstItem() {
  users.unshift("Денис");
  console.log("users: ", users);
}

function deleteFirstItem() {
  const firsUser = users.shift("Денис");
  console.log("firsUser: ", firsUser);
  console.log("users: ", users);
}

// Массив является объектом и, следовательно, ведёт себя как объект.
// Он копируется по ссылке
//Массивы - тоже объекты, но так делать нельзя

// users.age = 255;
// console.log("users: ", users);

function iterateArr() {
  let arr = ["Яблоко", "Апельсин", "Груша"];
  for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
  }
}

// Многомерные массивы
let matrix = [
  [1, 2, 3],
  [4, 5, 6], // 1 1
  [7, 8, 9],
];

console.log("matrix[1][1]", matrix[1][1]);

// toString
// Массивы по-своему реализуют метод toString, который возвращает список элементов, разделённых запятыми.

function arrToString() {
  const arr = [1, 2, 3];
  console.log("arr: ", String(arr));
}

//Копирование спред оператором
const users2 = [...users, "dfdfd", "dfdf"];
// const users2 = users;
console.log("users2: ", users2);
