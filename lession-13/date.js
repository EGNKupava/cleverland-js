"use strict";

//Без аргументов – создать объект Date с текущими датой и временем:
const date = new Date();
console.log("date: ", date);

const milliseconds = 1000 * 60 * 60 * 24 * 365 * 52; // мс * с * мин * ч * дни * года
const dateMs = new Date(milliseconds);
console.log("dateMs: ", dateMs);

// Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года, называется таймстамп (англ. timestamp).

const datestring = "2021-03-15";

const date210315 = new Date(datestring);
console.log("date210315: ", date210315);

// new Date(year, month, date, hours, minutes, seconds, ms)
// Создать объект Date с заданными компонентами в местном часовом поясе. Обязательны только первые два аргумента.

// year должен состоять из четырёх цифр: значение 2013 корректно, 98 – нет.
// month начинается с 0 (январь) по 11 (декабрь).
// Параметр date здесь представляет собой день месяца. Если параметр не задан, то принимается значение 1.
// Если параметры hours/minutes/seconds/ms отсутствуют, их значением становится 0.

const myBith = new Date(1990, 0, 28, 21, 30, 15, 55);
console.log("myBith: ", myBith);

console.log("myBith.getFullYear();: ", myBith.getFullYear());

console.log("myBith.getMonth(): ", myBith.getMonth());

console.log("myBith.getDate(): ", myBith.getDate());

// getHours(), getMinutes(), getSeconds(), getMilliseconds()
//getDay() Вернуть день недели от 0 (воскресенье) до 6 (суббота)

// getTime() Для заданной даты возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0.

console.log("myBith.getTime(): ", myBith.getTime());

// Следующие методы позволяют установить компоненты даты и времени:

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)

// Преобразование к числу, разность дат
// Если объект Date преобразовать в число, то получим таймстамп по аналогии с date.getTime():

console.log("myBithToNumber", +myBith);

// Date.now()
// Если нужно просто измерить время, объект Date нам не нужен.

// Существует особый метод Date.now(), возвращающий текущую метку времени.

// Семантически он эквивалентен new Date().getTime(), однако метод не создаёт промежуточный объект Date. Так что этот способ работает быстрее и не нагружает сборщик мусора.

let start = Date.now(); // количество миллисекунд с 1 января 1970 года

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // заканчиваем отсчёт времени

// alert(`Цикл отработал за ${end - start} миллисекунд`); // вычитаются числа, а не даты

// Бенчмаркинг!

//Разбор строки с датой
// Метод Date.parse(str) считывает дату из строки.

// Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss.sssZ, где:

// YYYY-MM-DD – это дата: год-месяц-день.
// Символ "T" используется в качестве разделителя.
// HH:mm:ss.sss – время: часы, минуты, секунды и миллисекунды.
// Необязательная часть 'Z' обозначает часовой пояс в формате +-hh:mm. Если указать просто букву Z, то получим UTC+0.

let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
console.log("ms: ", ms); // 1327611110417 (таймстамп)
