"use strict";

document.getElementById("2").addEventListener("click", func2);
document.getElementById("3").addEventListener("click", func3);
document.getElementById("4").addEventListener("click", func4);
document.getElementById("5").addEventListener("click", func5);
document.getElementById("6").addEventListener("click", func6);
document.getElementById("7").addEventListener("click", func7);
document.getElementById("8").addEventListener("click", func8);
document.getElementById("9").addEventListener("click", func9);
document.getElementById("10").addEventListener("click", func10);
document.getElementById("clock").addEventListener("click", showTime);

const container = document.getElementById("container");

const x1 = 4;
const x2 = 56;
const x3 = 2;
const x4 = 22;

function multiply(params) {
  let mult = 1;
  params.forEach((item) => {
    mult *= item;
  });
  return mult;
}

function func1(a, b, ...rest) {
  console.log("rest: ", rest);
  const z = a + b;
  const mult = multiply(rest);
  const answer = z + mult;
  console.log("answer: ", answer);
}

document.getElementById("1").addEventListener("click", () => {
  func1(x1, x2, x3, x4);
});

function func2() {
  const arr = [3, 5, 1, 87, 3, 1];
  console.log("Math.max(...arr): ", Math.max(...arr));
}

// Что выведет
function getMinMin(...rest) {
  console.log("getMinArgs: ", ...rest);
  return Math.min(...rest);
}

function getMin(...rest) {
  console.log("getMinArgs: ", rest);
  const min = getMinMin(...rest);
  console.log("min", min);
  return min;
}

function func3() {
  const myArr = [6, 4, 3, 2];
  getMin(...myArr);
}

//------------------------------------------------------
// Планирование

function sayNames(...args) {
  args.forEach((name) => {
    alert(name);
  });
}

let timerId;
function func4() {
  console.log("START");
  timerId = setTimeout(sayNames, 2000, "Вася", "Коля");
}

function func5() {
  console.log("CANCEL");
  clearTimeout(timerId);
}

//----------------------------

const inputEl = document.getElementById("input");
const titleEl = document.getElementById("title");
function func6() {
  console.log("START function 6");
  setInterval(() => {
    let value = inputEl.value;
    console.log("value: ", value);
    titleEl.innerText = value;
  }, 1000);
}

let intervalID;
function func7() {
  console.log("START function 7");
  const ballEl = document.getElementById("ball");
  intervalID = setInterval(() => {
    let positionX = Math.trunc(Math.random() * 100);
    let positionY = Math.trunc(Math.random() * 100);
    ballEl.style.top = `${positionY}%`;
    ballEl.style.right = `${positionX}%`;
  }, 1100);
}

function func8() {
  clearInterval(intervalID);
}

//-----------------------------------
// Рекурсивный setTimeout
function func9() {
  let timeoutId = setTimeout(function tick() {
    let delay = 2000;
    console.log("TICK");
    timeoutId = setTimeout(tick, delay); // Метод setTimeout выше планирует следующий вызов прямо после окончания текущего
  }, 2000);
}

// Рекурсивный setTimeout – более гибкий метод, чем setInterval. С его помощью последующий вызов может быть задан по-разному в зависимости от результатов предыдущего.
// Например, необходимо написать сервис, который отправляет запрос для получения данных на сервер каждые 5 секунд, но если сервер перегружен, то необходимо увеличить интервал запросов до 10, 20, 40 секунд… Вот псевдокод:

// let delay = 5000;

// let timerId = setTimeout(function request() {
//   ...отправить запрос...

//   if (ошибка запроса из-за перегрузки сервера) {
//     // увеличить интервал для следующего запроса
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);

function func10() {
  console.log("ПРИВЕТ");

  const whatDoing = () => {
    console.log("Что делаешь?");
  };

  setTimeout(() => {
    console.log("ПОКА");
    setTimeout(whatDoing);
  });

  console.log("Как дела!");
}

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s;
  document.getElementById("MyClockDisplay").innerText = time;

  setTimeout(showTime, 1000);
}
