"use strict";

const button1El = document.getElementById("1");
const button2El = document.getElementById("2");
document.getElementById("4").addEventListener("click", func4);
// document.getElementById("5").addEventListener("click", func5);

const container = document.getElementById("container");

// Обработчики событий
// Событию можно назначить обработчик, то есть функцию, которая сработает, как только событие произошло.
// Именно благодаря обработчикам JavaScript-код может реагировать на действия пользователя.

// Использование атрибута HTML

// Использование свойства DOM-объекта

button1El.onclick = function () {
  console.log("Сел на пенек - косарь отдал!");
};

// Если обработчик задан через атрибут, то браузер читает HTML-разметку, создаёт новую функцию из содержимого атрибута и записывает в свойство.
// Обработчик всегда хранится в свойстве DOM-объекта, а атрибут – лишь один из способов его инициализации.
// Так как у элемента DOM может быть только одно свойство с именем onclick, то назначить более одного обработчика так нельзя.
// Убрать обработчик можно назначением elem.onclick = null.

// Доступ к элементу через this
// Внутри обработчика события this ссылается на текущий элемент, то есть на тот, на котором, как говорят, «висит» (т.е. назначен) обработчик.
button2El.onclick = function () {
  console.log(this.innerText);
};

// addEventListener

// Фундаментальный недостаток описанных выше способов назначения обработчика –- невозможность повесить несколько обработчиков на одно событие.
// Например, одна часть кода хочет при клике на кнопку делать её подсвеченной, а другая – выдавать сообщение.
const button3El = document.getElementById("3");

// element.addEventListener(event, handler[, options]);
// event
// Имя события, например "click".
// handler
// Ссылка на функцию-обработчик.
// options
// Дополнительный объект со свойствами:

button3El.addEventListener("click", (e) => {
  console.log("С Новым Годом)");
  e.stopImmediatePropagation();
});

function changeColor(e) {
  this.style.backgroundColor = "#00FF00";
}

button3El.addEventListener("click", changeColor);

// Для удаления обработчика следует использовать removeEventListener:
// element.removeEventListener(event, handler[, options]);
// Удаление требует именно ту же функцию

// button3El.removeEventListener("click", changeColor);

// Обработчики некоторых событий можно назначать только через addEventListener
// Существуют события, которые нельзя назначить через DOM-свойство, но можно через addEventListener.
// Например, таково событие DOMContentLoaded, которое срабатывает, когда завершена загрузка и построение DOM документа.

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM построен");
});

// Объект события event
function func4(event) {
  console.log("event: ", event);
  // вывести тип события, элемент и координаты клика
  alert(event.type + " на " + event.currentTarget);
  alert("Координаты: " + event.clientX + ":" + event.clientY);
}

function showThisId(event) {
  event.stopPropagation();
  console.log("event.target.id: ", event.target.id);
  alert(this.id);
}

document.getElementById("button").onclick = showThisId;
document.getElementById("container").onclick = showThisId;

// event.target
// Всегда можно узнать, на каком конкретно элементе произошло событие.
// Самый глубокий элемент, который вызывает событие, называется целевым элементом, и он доступен через event.target.

//Прекращение всплытия
// Но любой промежуточный обработчик может решить, что событие полностью обработано, и остановить всплытие.
// Для этого нужно вызвать метод event.stopPropagation().

// Погружение
// options = {capture: true}

// Make a request for a user with a given ID
axios
  .get("/user?ID=12345")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
