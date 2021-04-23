"use strict";

// XMLHttpRequest – это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы.
// CRUD - операции
// POST GET PUT DELETE

let xhr = new XMLHttpRequest();

// xhr.open(method, URL, [async, user, password])
//method – HTTP-метод. Обычно это "GET" или "POST".
// URL – URL, куда отправляется запрос: строка, может быть и объект URL.
// async – если указать false, тогда запрос будет выполнен синхронно, это мы рассмотрим чуть позже.
// user, password – логин и пароль для базовой HTTP-авторизации (если требуется).

const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=Orsha&appid=f4a3e13f259dfdbd23f06c3973018636&units=metric";

xhr.open("GET", URL);

// xhr.send([body]);
xhr.send();

xhr.onload = function () {
  if (xhr.status != 200) {
    // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
  } else {
    // если всё прошло гладко, выводим результат
    alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
    console.log("xhr.response: ", xhr.response);
  }
};

// xhr.onprogress = function(event) {
//   if (event.lengthComputable) {
//     alert(`Получено ${event.loaded} из ${event.total} байт`);
//   } else {
//     alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
//   }
// };

xhr.onerror = function () {
  alert("Запрос не удался");
};

// xhr.timeout = 10000; Мы можем также указать таймаут – промежуток времени, который мы готовы ждать ответ:

// query parameters
// ?name=value&?name=value

// Тип ответа
// Мы можем использовать свойство xhr.responseType, чтобы указать ожидаемый тип ответа:

// "" (по умолчанию) – строка,
// "text" – строка,
// "arraybuffer" – ArrayBuffer (для бинарных данных, смотрите в ArrayBuffer, бинарные массивы),
// "blob" – Blob (для бинарных данных, смотрите в Blob),
// "document" – XML-документ (может использовать XPath и другие XML-методы),
// "json" – JSON (парсится автоматически).

// Состояния запроса

// UNSENT = 0; // исходное состояние
// OPENED = 1; // вызван метод open
// HEADERS_RECEIVED = 2; // получены заголовки ответа
// LOADING = 3; // ответ в процессе передачи (данные частично получены) Повторяется, пока не получены все данные
// DONE = 4; // запрос завершён

// Отмена запроса
// Если мы передумали делать запрос, можно отменить его вызовом xhr.abort():

// xhr.abort(); // завершить запрос

// Синхронные запросы
// Если в методе open третий параметр async установлен на false, запрос выполняется синхронно.

// HTTP-заголовки
// setRequestHeader(name, value)  Устанавливает заголовок запроса с именем name и значением value.
// getResponseHeader(name) Возвращает значение заголовка ответа name (кроме Set-Cookie и Set-Cookie2).
// getAllResponseHeaders()
