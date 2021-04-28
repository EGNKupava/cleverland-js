"use strict";

// Обычно скрипт в случае ошибки «падает» (сразу же останавливается), с выводом ошибки в консоль.
// Синтаксис «try…catch»

function catchError() {
  try {
    //  код...
    const arr = [];
    // const myElement = "hey";
    const x = arr.push(myElement);

    console.log("Конец try");
  } catch (err) {
    console.log(err.message);
    // обработка ошибки
  }

  console.log("Код дальше");
}
// __________________________________________________________________________________________________________

// Чтобы try..catch работал, код должен быть выполнимым. Другими словами, это должен быть корректный JavaScript-код.

// try..catch работает синхронно

function withTimeout() {
  try {
    setTimeout(() => {
      noSuchVariable; // скрипт упадёт тут
    }, 2000);
  } catch (e) {
    alert("не сработает");
  }
}

// Чтобы поймать исключение внутри запланированной функции, try..catch должен находиться внутри самой этой функции:

// withTimeout();

// __________________________________________________________________________________________________________

// Объект ошибки
// Когда возникает ошибка, JavaScript генерирует объект, содержащий её детали.
// Затем этот объект передаётся как аргумент в блок catch:

function getErrorNames() {
  try {
    lalala; // ошибка, переменная не определена!
  } catch (err) {
    // err.name; // ReferenceError
    console.log("err.name: ", err.name);
    // err.message; // lalala is not defined
    console.log("err.message: ", err.message);
    // err.stack; // ReferenceError: lalala is not defined at (...стек вызовов)
    console.log("err.stack: ", err.stack);

    // Можем также просто вывести ошибку целиком
    // Ошибка приводится к строке вида "name: message"
    // ReferenceError: lalala is not defined
    console.log("err: ", err);
  }
}

// getErrorNames();

// __________________________________________________________________________________________________________
// Блок «catch» без переменной
// Если не важны детали
// __________________________________________________________________________________________________________

function jsonParse() {
  let json = "{ x = heyhey}";

  try {
    let user = JSON.parse(json); // падаем из-зи некорректного перевода
    console.log("user: ", user);
  } catch (error) {
    console.log("error: ", error.message);
  }
}

// jsonParse();

// __________________________________________________________________________________________________________

// Оператор «throw»
// Для того, чтобы унифицировать обработку ошибок, мы воспользуемся оператором throw.

// В JavaScript есть множество встроенных конструкторов для стандартных ошибок:
// Error, SyntaxError, ReferenceError, TypeError и другие. Можно использовать и их для создания объектов ошибки.

let error1 = new Error("message");
// или
let error2 = new SyntaxError("message");
let error3 = new ReferenceError("message");

let error4 = new Error("Ого, ошибка! o_O");
// console.log(error4);

// ___________________________________________________________________________

let jsonNoName = '{ "age": 30 }'; // данные неполны
let jsonName = '{ "age": 30, "name": "Валенок" }'; // данные неполны

// Генерация пользовательских ошибок «throw»
function tojson(json) {
  try {
    let user = JSON.parse(json);
    if (!user.name) {
      throw new SyntaxError("Данные неполны: нет имени"); // (*)
    }
    console.log(user);
  } catch (err) {
    console.log("err: ", err);
  }
}

// tojson(jsonName);

// ______________________________________________________________________________

// Проброс исключения
// Блок catch должен обрабатывать только те ошибки, которые ему известны, и «пробрасывать» все остальные.

function readData() {
  let json = '{ "age": 30 }';
  try {
    // ...
    blabla(); // ошибка!
  } catch (e) {
    // ...
    if (e.name != "SyntaxError") {
      throw e; // проброс исключения (не знаю как это обработать)
    }
  }
}

function getData() {
  try {
    readData();
  } catch (e) {
    alert("Внешний catch поймал: " + e); // поймал!
  }
}

// Здесь readData знает только, как обработать SyntaxError, тогда как внешний блок try..catch знает, как обработать всё.

// ______________________________________________________________________________________________________________________
// try…catch…finally

try {
  // ... пробуем выполнить код...
} catch (e) {
  // ... обрабатываем ошибки ...
} finally {
  // ... выполняем всегда ...
}

function tryBlock() {
  try {
    alert("try");
    if (confirm("Сгенерировать ошибку?")) throw new Error("WTF");
  } catch (e) {
    alert("catch");
  } finally {
    alert("finally");
  }
}

// tryBlock();

// _________________________________________________________________________________________________

function getFibonaccci() {
  let num = +prompt("Введите положительное целое число?", 35);

  let diff, result;

  function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
      throw new Error("Должно быть целое неотрицательное число");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

  let start = Date.now();

  try {
    result = fib(num);
  } catch (e) {
    result = 0;
  } finally {
    diff = Date.now() - start;
  }

  alert(result || "возникла ошибка");

  alert(`Выполнение заняло ${diff}ms`);
}

// getFibonaccci();

// Переменные внутри try..catch..finally локальны
// Обратите внимание, что переменные result и diff в коде выше объявлены до try..catch.
// Если переменную объявить в блоке, например, в try, то она не будет доступна после него.

// ________________________________________________________________-----
// Блок finally срабатывает при любом выходе из try..catch, в том числе и return.

// В примере ниже из try происходит return, но finally получает управление до того, как контроль возвращается во внешний код.
function func() {
  try {
    return "Результат выполнения функции";
  } catch (e) {
    /* ... */
  } finally {
    alert("finally");
  }
}

// alert(func()); // сначала срабатывает alert из finally, а затем этот код

// ______________________________________________________________________

// Конструкция try..finally без секции catch также полезна.
// Мы применяем её, когда не хотим здесь обрабатывать ошибки (пусть выпадут), но хотим быть уверены, что начатые процессы завершились.

function hzFunc() {
  try {
    megaError();
  } finally {
    console.log("Все равно выполнись!!");
  }
}

function catchErrors() {
  try {
    hzFunc();
  } catch (err) {
    console.log("err: ", err);
  }
}

// catchErrors();

// НАследование объекта Error

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Упс!");
}

function startTest() {
  try {
    test();
  } catch (err) {
    alert(err.message); // Упс!
    alert(err.name); // ValidationError
    alert(err.stack); // список вложенных вызовов с номерами строк для каждого
  }
}

// startTest()
