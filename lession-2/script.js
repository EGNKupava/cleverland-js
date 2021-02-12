"use strict";

console.log(typeof undefined); // "undefined"

console.log(typeof 0); // "number"

console.log(typeof 100n); // "bigint (2^53)-1"

console.log(typeof false); // "boolean"

console.log(typeof "Hello"); // "string"

console.log(typeof Symbol("id")); // "symbol"

console.log(typeof Math); // "object"

console.log(typeof null); // object

/*ошибка в typeof, ведущая начало с времён создания JavaScript и сохранённая для совместимости. Конечно, null не является объектом. Это специальное значение с отдельным типом.*/

console.log(typeof alert); // "function"

console.log(typeof [1, 2]); // object

console.log(typeof {}); // object

window.alert("Модальное окно!");

let result = prompt("ВВЕДИТЕ ЗНАЧЕНИЕ", 42); //42 default значение;

console.log("Введенное значение:", result);

let isDelete = window.confirm("Точно хотите удалить?");

if (isDelete === true) window.alert("УДАЛЕНО!!!");

// Все эти методы являются модальными: останавливают выполнение скриптов и не позволяют пользователю взаимодействовать с остальной частью страницы до тех пор, пока окно не будет закрыто.
