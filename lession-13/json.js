"use strict";

const user = {
  name: "Коля",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
  adress: {
    house: 15,
    street: "Совестская",
    flate: 55,
  },
};

const jsonUser = JSON.stringify(user);
console.log("jsonUser: ", jsonUser);
console.log(typeof jsonUser);

// Метод JSON.stringify(student) берёт объект и преобразует его в строку.

// Обратите внимание, что объект в формате JSON имеет несколько важных отличий от объектного литерала:

// Строки используют двойные кавычки. Никаких одинарных кавычек или обратных кавычек в JSON. Так 'John' становится "John".
// Имена свойств объекта также заключаются в двойные кавычки. Это обязательно. Так age:30 становится "age":30.
// JSON.stringify может быть применён и к примитивам.

// JSON поддерживает следующие типы данных:

// Объекты { ... }
// Массивы [ ... ]
// Примитивы:
// строки,
// числа,
// логические значения true/false,
// null.

//JSON является независимой от языка спецификацией для данных, поэтому JSON.stringify пропускает некоторые специфические свойства объектов JavaScript.
// А именно:
// Свойства-функции (методы).
// Символьные свойства.
// Свойства, содержащие undefined.

const user2 = {
  name: "Коля",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
  sayHi: () => {
    alert("Hi");
  },
  money: undefined,
};

const jsonUser2 = JSON.stringify(user2);
console.log("jsonUser2: ", jsonUser2);

//Исключаем и преобразуем: replacer
// Полный синтаксис JSON.stringify:

// let json = JSON.stringify(value[, replacer, space])
// value
// Значение для кодирования.
// replacer
// Массив свойств для кодирования или функция соответствия function(key, value).
// space
// Дополнительное пространство (отступы), используемое для форматирования.

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   alert(`${key}: ${value}`);
//   return (key == 'occupiedBy') ? undefined : value;
// }));

/* пары ключ:значение, которые приходят в replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
*/

//Пользовательский «toJSON»
let myRoom = {
  number: 23,
  house: 31,
  toJSON() {
    return this.number;
  },
};

console.log("room.toJSON: ", JSON.stringify(myRoom));

// -----------------------------------------------------------------
// JSON.parse
// Чтобы декодировать JSON-строку, нам нужен другой метод с именем JSON.parse.
// Синтаксис:

const reviver = (key, value) => {
  // console.log("key:value ", key, value);
  return value;
};

const jsonUser2Obj = JSON.parse(jsonUser2, reviver);
console.log("jsonUser2Obj: ", jsonUser2Obj);

// reviver
// Необязательная функция, которая будет вызываться для каждой пары (ключ, значение) и может преобразовывать значение.

// JSON – это формат данных, который имеет собственный независимый стандарт и библиотеки для большинства языков программирования.
// JSON поддерживает простые объекты, массивы, строки, числа, логические значения и null.
// JavaScript предоставляет методы JSON.stringify для сериализации в JSON и JSON.parse для чтения из JSON.
// Оба метода поддерживают функции преобразования для интеллектуального чтения/записи.
// Если объект имеет метод toJSON, то он вызывается через JSON.stringify.

// -----------------------------------------------------------------------------------
const jsonButton = document.getElementById("json");
jsonButton.addEventListener("click", getData);

function getData() {
  const testUrl = "https://jsonplaceholder.typicode.com/users";
  const testUrl2 = "https://jsonplaceholder.typicode.com/todos/1";

  const jsonData = fetch(testUrl)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    });
  console.log("jsonData: ", jsonData);
}
