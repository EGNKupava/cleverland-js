"use strict";

const user = {
  name: "Egor",
  lastName: "Sidorov",
  age: 32,
  adress: {
    city: "Minsk",
    street: "lenin",
    house: 15,
  },
};

// возвращает массив ключей.
const userKeys = Object.keys(user);
console.log("userKeys: ", userKeys);

// возвращает массив значений.
const userValues = Object.values(user);
console.log("userValues: ", userValues);

// возвращает массив пар [ключ, значение].
const userEntries = Object.entries(user);
console.log("userEntries: ", userEntries);

// [ключ, значение] массив преобразует в объект
//Object.fromEntries()
const entries = [
  ["foo", "bar"],
  ["baz", 42],
];

const obj = Object.fromEntries(entries);

console.log(obj);

// *******************************************************

const { lastName, name, adress } = user;

// console.log("name: ", name);
// console.log("lastName: ", lastName);
// ----------------------------------------------------------------
//Значения по умолчанию могут быть гораздо более сложными выражениями или даже функциями.
// Они выполняются, только если значения отсутствуют.

// const { lastName, name, adress: { city, street,}, salary = 1000 } = user;
// console.log("city: ", city);
// console.log("street: ", street);
// console.log("salary: ", salary);

//Деструктуризация в цикле
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}: ${value}`);
// }

//Свойство объекта переменной с другим названием
const { lastName: userLastName, name: userName, adress: userAddress } = user;
// console.log('userAddress: ', userAddress);
// console.log('userName: ', userName);
// console.log('userLastName: ', userLastName);

// ----------------------------------------------------------------------

const pets = ["cat", "dog", "parrot", "mouse", "rabbit", "frog"];
const petsObj = { cat: "Кеша", dog: "Барбос", parrot: "Вася", mouse: "Нора" };
const [animal1, animal2, , animal4] = pets;

const [myAnimal1, myanimal2, ...rest] = pets;

const newUser = {};
[newUser.name, newUser.surname] = "Ilya Kantor".split(" ");
// Переменная rest является массивом из оставшихся элементов.
// Вместо rest можно использовать любое другое название переменной, просто убедитесь,
// что перед переменной есть три точки и она стоит на последнем месте в деструктурирующем присваивании.

// console.log("rest: ", rest);
// console.log("myanimal2: ", myanimal2);
// console.log("myAnimal1: ", myAnimal1);

// const { cat, dog, ...restPets } = petsObj;
// console.log("restPets: ", restPets);
// console.log("dog: ", dog);
// console.log("cat: ", cat);

// Вложенная деструктуризация

const options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// деструктуризация разбита на несколько строк для ясности
const {
  size: {
    // положим size сюда
    width,
    height,
  },
  items: [item1, item2], // добавим элементы к items
  title = "Menu", // отсутствует в объекте (используется значение по умолчанию)
} = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200
// console.log(item1);  // Cake
// console.log(item2);  // Donut

// Функции

// ошибиться в порядке аргументтов нельзя
const vehicle = {
  year: 2000,
  brand: "Audi",
  engine: 1.8,
};

const { year, brand, engine } = vehicle;

const myFunc = (y, br, v) => {
  console.log("Авто", `${y} года, марки ${br} с двигателем ${v}`);
};

myFunc(year, brand, engine);

// Ничто не мешает сделать деструктуризацию в описании параметров

const smartmyFunc = ({ y, br, v }) => {
  console.log("Авто", `${y} года, марки ${br} с двигателем ${v}`);
};

smartmyFunc(vehicle);
