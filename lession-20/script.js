"use strict";

// Для сетевых запросов из JavaScript есть широко известный термин «AJAX» (аббревиатура от Asynchronous JavaScript And XML)

// let promise = fetch(url, [options])

// Мы можем увидеть HTTP-статус в свойствах ответа:

// status – код статуса HTTP-запроса, например 200.
// ok – логическое значение: будет true, если код HTTP-статуса в диапазоне 200-299.

const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=Orsha&appid=f4a3e13f259dfdbd23f06c3973018636&units=metric";

const textarea = document.getElementById("textarea");

async function getWeather() {
  let response = await fetch(URL);

  if (response.ok) {
    // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    let json = await response.json();
    console.log("json: ", json);
    console.log("response: ", response);
    textarea.value = JSON.stringify(json);
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}

// getWeather();

// Response предоставляет несколько методов, основанных на промисах, для доступа к телу ответа в различных форматах:

// response.text() – читает ответ и возвращает как обычный текст,
// response.json() – декодирует ответ в формате JSON,
// response.formData() – возвращает ответ как объект FormData (разберём его в следующей главе),
// response.blob() – возвращает объект как Blob (бинарные данные с типом),
// response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),
// помимо этого, response.body – это объект ReadableStream, с помощью которого можно считывать тело запроса по частям. Мы рассмотрим и такой пример несколько позже.

async function postUserData(json) {
  let response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: json,
  });

  let result = await response.json();
  console.log("result: ", result);
}

const formElem = document.getElementById("userForm");

formElem.onsubmit = async (e) => {
  e.preventDefault();
  const form = new FormData(formElem);
  let object = {};
  form.forEach(function (value, key) {
    object[key] = value;
  });
  let json = JSON.stringify(object);
  postUserData(json);
};

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

// fetchData();
