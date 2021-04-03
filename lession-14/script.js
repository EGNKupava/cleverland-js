"use strict";

const buttonEl = document.getElementById("bg");
buttonEl.addEventListener("click", () => {
  document.body.style.background = "#00ff00";
});

// Все операции с DOM начинаются с объекта document.
// Это главная «точка входа» в DOM.
// Из него мы можем получить доступ к любому узлу.

//Есть одна тонкость: document.body может быть равен null

// Дочерние элементы и потомки

// Свойства firstChild и lastChild обеспечивают быстрый доступ к первому и последнему дочернему элементу.

const container = document.getElementById("container");

const firstChild = container.firstChild;
console.log("firstChild1: ", firstChild);
const firstElementChild = container.firstElementChild;
console.log("firstChild: ", firstElementChild);
const lastChild = container.lastChild;
console.log("lastChild: ", lastChild);

// DOM-коллекции
//Для перебора коллекции мы можем использовать for..of:

for (let node of document.body.childNodes) {
  // console.log('node: ', node);
  // покажет все узлы из коллекции
}

// Соседи – это узлы, у которых один и тот же родитель.

// children – коллекция детей, которые являются элементами.
// firstElementChild, lastElementChild – первый и последний дочерний элемент.
// previousElementSibling, nextElementSibling – соседи-элементы.
// parentElement – родитель-элемент.

const secondParagraphEl = document.getElementById("second-paragraph");

const firstParagraphEl = secondParagraphEl.previousElementSibling;
// console.log("firstParagraphEl: ", firstParagraphEl);

const thirdParagraphEl = secondParagraphEl.nextElementSibling;
// console.log("thirdParagraphEl: ", thirdParagraphEl);

const parentEl = secondParagraphEl.parentElement;
// console.log("parentEl: ", parentEl);
const parentNode = secondParagraphEl.parentNode;
// console.log("parentNode: ", parentNode);

// Зачем нужен parentElement? Разве может родитель быть не элементом?
// Свойство parentElement возвращает родитель-элемент, а parentNode возвращает «любого родителя». Обычно эти свойства одинаковы: они оба получают родителя.

// За исключением document.documentElement:

// выведет document

// console.log(
//   "document.documentElement.parentNode: ",
//   document.documentElement.parentNode
// );

// console.log(
//   "document.documentElement.parentElement: ",
//   document.documentElement.parentElement
// );

//_____________________________________________________________________

// Поиск элементов
// Если у элемента есть атрибут id, то мы можем получить его вызовом document.getElementById(id), где бы он ни находился.
// Также есть глобальная переменная с именем, указанным в id:
// Это поведение соответствует стандарту, но поддерживается в основном для совместимости, как осколок далёкого прошлого.

// console.log("container: ", container);

const containerEl = document.getElementById("container");
// Метод getElementById можно вызвать только для объекта document. Он осуществляет поиск по id по всему документу.

// Самый универсальный метод поиска – это elem.querySelectorAll(css),
// он возвращает все элементы внутри elem, удовлетворяющие данному CSS-селектору.

const domCollection = document.querySelectorAll(".container");
// console.log("domCollection: ", domCollection);

// querySelector
//Метод elem.querySelector(css) возвращает первый элемент, соответствующий данному CSS-селектору.

const firstContainer = document.querySelector(".container");

// matches
// Метод elem.matches(css) ничего не ищет, а проверяет, удовлетворяет ли elem CSS-селектору, и возвращает true или false.

// closest
// Предки элемента – родитель, родитель родителя, его родитель и так далее. Вместе они образуют цепочку иерархии от элемента до вершины.

// Метод elem.closest(css) ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск.

// getElementsBy

// Есть 6 основных методов поиска элементов в DOM:

// Метод	Ищет по...	Ищет внутри элемента?	Возвращает живую коллекцию?
// querySelector	CSS-selector	✔	-
// querySelectorAll	CSS-selector	✔	-
// getElementById	id	-	-
// getElementsByName	name	-	✔
// getElementsByTagName	tag or '*'	✔	✔
// getElementsByClassName	class	✔	✔
