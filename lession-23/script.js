"use strict";

//Существует специальный синтаксис для работы с промисами, который называется «async/await».
async function func() {
  return 1;
}

// У слова async один простой смысл: эта функция всегда возвращает промис.

// func().then((res) => {
//   alert(res);
// });

// Await
//Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится.
//После чего оно вернёт его результат, и выполнение кода продолжится.
// await нельзя использовать в обычных функциях

const delay = (ms) => new Promise((_) => setTimeout(_, ms));

const fetchData = async () => {
  console.log("START");
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  delay(5000);
  console.log("json: ", json);
};

// fetchData();

// await работает с «thenable»–объектами

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // выполнить resolve со значением this.num * 2 через 1000мс
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}

async function foo() {
  // код будет ждать 1 секунду,
  // после чего значение result станет равным 2
  let result = await new Thenable(1);
  alert(result);
}

// foo();

// Обработка ошибок
// Когда промис завершается успешно, await promise возвращает результат.
// Когда завершается с ошибкой – будет выброшено исключение.
// Как если бы на этом месте находилось выражение throw.

async function f() {
  await Promise.reject(new Error("Упс!"));
}

async function f() {
  throw new Error("Упс!");
}

const fetchData1 = async () => {
  console.log("START");
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    console.log("json: ", json);
    // throw new Error('WTF ERROR');
  } catch (err) {
    // перехватит любую ошибку в блоке try: и в fetch, и в response.json
    console.log("err", err);
  }
};

// fetchData1();

// Если забыть добавить .catch, то будет сгенерирована ошибка «Uncaught promise error» и информация об этом будет выведена в консоль
// При работе с async/await, .then используется нечасто, так как await автоматически ожидает завершения выполнения промиса. В этом случае обычно (но не всегда) гораздо удобнее перехватывать ошибки, используя try..catch, нежели чем .catch.

// Но на верхнем уровне вложенности (вне async–функций) await использовать нельзя, поэтому .then/catch для обработки финального результата или ошибок – обычная практика.

// async/await отлично работает с Promise.all
// let results = await Promise.all([
//   fetch(url1),
//   fetch(url2),
//   ...
// ]);

// В случае ошибки она будет передаваться как обычно: от завершившегося с ошибкой промиса к Promise.all.
// А после будет сгенерировано исключение, которое можно отловить, обернув выражение в try..catch.

//_____________________________________________________________________________

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
];

const fechData3 = async () => {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    const data = responses.map((res) => res.json());
    console.log("data: ", data);
  } catch (err) {
    console.log("err", err);
  }
};

// fechData3();

// Микрозадачи

function getInfo() {
  const promise = new Promise((resolve, reject) => {
    console.log("#1");
    resolve("#2");
  });

  promise.then((res) => {
    console.log(res);
  });

  console.log("#3");

  const get4 = async () => {
    console.log("#4");
  };

  get4();
  // .then(() => {
  //   console.log("#5");
  // });
}

getInfo();

// Очередь микрозадач
// Асинхронные задачи требуют правильного управления.
// Для этого стандарт предусматривает внутреннюю очередь PromiseJobs, более известную как «очередь микрозадач (microtask queue)» (термин V8).
