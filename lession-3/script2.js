"use strict";

const c = Math.random() * 10;
console.log("c: ", c);
const a = Math.floor(c);
console.log("a: ", a);

do {
  let b = prompt("Попробуйте угадать число от 0 до 10!");
  if (!b) {
    alert("Выход из программы!");
    break;
  }
  if (isNaN(b)) {
    alert("Не число");
    continue;
  }
  if (b > a) {
    alert("Не угадали Многовато!");
    continue;
  } else if (b < a) {
    alert("Не угадали Маловато!");
    continue;
  } else {
    alert(`Угадали ${a} !!!`);
    break;
  }
} while (false);

for (let i = 1; i < 10; i++) {
  console.log("привет");
}
