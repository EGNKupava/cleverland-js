function foo1(callback) {
  setTimeout(function () {
    callback("A");
  }, Math.random() * 100);
}

function foo2(callback) {
  setTimeout(function () {
    callback("B");
  }, Math.random() * 100);
}

function foo3(callback) {
  setTimeout(function () {
    callback("C");
  }, Math.random() * 100);
}

// foo1(showConsole); // Выводится хаотично
// foo2(showConsole);
// foo3(showConsole);

Promise.all([
  new Promise((resolve) => foo1(resolve)),
  new Promise((resolve) => foo2(resolve)),
  new Promise((resolve) => foo3(resolve)),
]).then((res) => res.forEach((item) => console.log(item)));

//выведится первый

// Promise.race([
//   new Promise((resolve) => foo1(resolve)),
//   new Promise((resolve) => foo2(resolve)),
//   new Promise((resolve) => foo3(resolve)),
// ]).then((res) => console.log(res));
