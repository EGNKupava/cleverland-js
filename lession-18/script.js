"use strict";
// mousedown/mouseup
// mouseover/mouseout
// mousemove
// contextmenu
// click
// dblclick

// Получение информации о кнопке: which
// Есть три возможных значения:
//
// event.which == 1 – левая кнопка
// event.which == 2 – средняя кнопка
// event.which == 3 – правая кнопка

const box1 = document.getElementById("box1");
const textarea = document.getElementById("textarea");

box1.onclick = getEvents;
box1.onmousedown = getEvents;
box1.onmouseup = getEvents;

function getEvents(e) {
  console.log(e.type);
  console.log(e.which);
  textarea.value += "\n" + e.type + " " + e.which;
}

// Модификаторы: shift, alt, ctrl и meta
// Все события мыши включают в себя информацию о нажатых клавишах-модификаторах.

// Свойства объекта события:

// shiftKey: Shift
// altKey: Alt (или Opt для Mac)
// ctrlKey: Ctrl
// metaKey: Cmd для Mac
const box2 = document.getElementById("box2");
const textarea2 = document.getElementById("textarea2");

box2.onclick = getEvents2;

function getEvents2(e) {
  console.log(e.type);
  textarea2.value += "\n" + e.type + " " + e.altKey + " " + e.shiftKey;
  if (e.altKey && e.shiftKey) {
    alert("Ура!");
  }
}

// Координаты: clientX/Y, pageX/Y
// Все события мыши имеют координаты двух видов:

// Относительно окна: clientX и clientY.
// Относительно документа: pageX и pageY.

const ballEl = document.getElementById("ball");

// document.body.onmousemove = (e) => {
//   let w = window.innerWidth;
//   let h = window.innerHeight;
//   ballEl.style.top = `${(e.clientY * 100) / h}%`;
//   ballEl.style.left = `${(e.clientX * 100) / w}%`;
// };

document.getElementById("not-copy").oncopy = () => {
  alert("Копирование запрещено!");
  return false;
};

// Движение мыши: mouseover/out, mouseenter/leave

// https://learn.javascript.ru/mouse-drag-and-drop

// https://plnkr.co/edit/POrrNntN9BvpsxUY?p=preview&preview
// Если пользователь работает с разными языками, то при переключении на другой язык символ изменится с "Z" на совершенно другой.
// Получившееся станет новым значением event.key, тогда как event.code останется тем же: "KeyZ".

document.body.onkeydown = (e) => {
  let position = ballEl.getBoundingClientRect();
  let w = window.innerWidth;
  let h = window.innerHeight;
  if (e.code === "ArrowUp")
    ballEl.style.top = `${(position.top * 100) / h - 1}%`;
  if (e.code === "ArrowDown")
    ballEl.style.top = `${(position.top * 100) / h + 1}%`;
  if (e.code === "ArrowLeft")
    ballEl.style.left = `${(position.left * 100) / w - 1}%`;
  if (e.code === "ArrowRight")
    ballEl.style.left = `${(position.left * 100) / w + 1}%`;
};
