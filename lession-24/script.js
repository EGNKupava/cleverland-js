"use strict";
// Функция-генератор
// Для объявления генератора используется специальная синтаксическая конструкция: function*, которая называется «функция-генератор».

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
// Функции-генераторы ведут себя не так, как обычные. Когда такая функция вызвана, она не выполняет свой код.
// Вместо этого она возвращает специальный объект, так называемый «генератор», для управления её выполнением.

// "функция-генератор" создаёт объект "генератор"
const generator = generateSequence();
console.log("generator: ", generator); // [object Generator]

// Основным методом генератора является next().

// Результатом метода next() всегда является объект с двумя свойствами:

// value: значение из yield.
// done: true, если выполнение функции завершено, иначе false.

const firstCall = generator.next();
console.log("firstCall: ", firstCall);

const secondCall = generator.next();
console.log("secondCall: ", secondCall);

const thirdCall = generator.next();
console.log("thirdCall: ", thirdCall);

const fourthCall = generator.next();
console.log("fourthCall: ", fourthCall);

// for (let value of generator) {
//   console.log("value: ", value);
// }

function* generateSum() {
  let sum = 0;
  yield sum++;
  yield sum++;
  yield sum++;
}

const sumGenerator = generateSum();
for (let value of sumGenerator) {
  // console.log("sumGenerator value: ", value);
}

// Так как генераторы являются перебираемыми объектами, мы можем использовать всю связанную с ними функциональность,
// например оператор расширения ...:

function* generateSequence1() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const sequence = [0, ...generateSequence1()];
// console.log("sequence: ", sequence);

// Использование генераторов для перебираемых объектов

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]: function* () {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

// console.log("[...range]: ", [...range]); // 1,2,3,4,5

//Композиция генераторов

function* generateSequence3(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
  // 0..9
  yield* generateSequence3(48, 57);

  // A..Z
  yield* generateSequence3(65, 90);

  // a..z
  yield* generateSequence3(97, 122);
}

let str = "";

for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

// console.log("str: ", str);

// yield - дорога в обе стороны

function* gen() {
  let ask1 = yield "2 + 2 = ?";

  alert(ask1); // 4

  let ask2 = yield "3 * 3 = ?";

  alert(ask2); // 9
}

// let generator2 = gen();

// alert(generator2.next().value); // "2 + 2 = ?"

// alert(generator2.next(4).value); // "3 * 3 = ?"

// alert(generator2.next(9).done); // true
