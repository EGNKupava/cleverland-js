"use strict";

document.getElementById("1").addEventListener("click", func1);

document.getElementById("2").addEventListener("click", func2);
document.getElementById("3").addEventListener("click", func3);
document.getElementById("4").addEventListener("click", func4);
document.getElementById("5").addEventListener("click", func5);
document.getElementById("6").addEventListener("click", func6);
document.getElementById("7").addEventListener("click", func7);

const container = document.getElementById("container");

console.log("containerInnerHTML: ", container.innerHTML);

function func1() {
  container.innerHTML = "<h2>НОВЫЙ КОНТЕНТ</h2>";
  // Будьте внимательны: «innerHTML+=» осуществляет перезапись
  // container.innerHTML += "<h2>НОВЫЙ КОНТЕНТ</h2>";
}

// outerHTML: HTML элемента целиком

function func2() {
  console.log("containerOuterHTML: ", container.outerHTML);
  container.outerHTML = "<div>Новый Контейнер</div>";
  // container.outerHTML += '<h2>НОВЫЙ КОНТЕНТ</h2>';
}

// Будьте осторожны: в отличие от innerHTML, запись в outerHTML не изменяет элемент.
// Вместо этого элемент заменяется целиком во внешнем контексте.
const news = document.getElementById("news");

function func3() {
  console.log("news.textContent: ", news.textContent);
}

// hidden

function func4() {
  news.hidden = true;
  setInterval(() => (news.hidden = !news.hidden), 1000);
}

//DOM-свойства
// DOM-узлы – это обычные объекты JavaScript. Мы можем их изменять.
function func5() {
  news.title = "Скрытая подсказка";
}

// Мы можем добавить и метод:
news.showInnerHtml = function () {
  alert(this.innerHTML);
};

function func6() {
  news.showInnerHtml();
}

// Аттрибуты
// Конечно. Все атрибуты доступны с помощью следующих методов:
// elem.hasAttribute(name) – проверяет наличие атрибута.
// elem.getAttribute(name) – получает значение атрибута.
// elem.setAttribute(name, value) – устанавливает значение атрибута.
// elem.removeAttribute(name) – удаляет атрибут.

function func7() {
  const input = document.querySelector("input");

  // атрибут => значение
  input.setAttribute("value", "text");
  alert(input.value); // text

  // свойство => атрибут
  input.value = "МОЙ ТЕКСТ";
  alert(input.getAttribute("value")); // text (не обновилось!)
}

document.getElementById("menu").addEventListener("click", () => {
  const burgerMenu = document.getElementById("burger-menu");
  burgerMenu.classList.toggle("active");
});
