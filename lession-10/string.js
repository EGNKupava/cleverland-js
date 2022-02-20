"use strict";

const num = 3;
const dog1 = "Cобакен Бобик";
const dog2 = "cобакен Барбос";

const dog3 = `СобАкен ШариК ${3}`;

const cats = "Барсик \n Кузя \n Матроскин"; //Символ перевода строки
const cats2 = `Барсик
 Кузя
 Матроскин`; //Многострочная строка с помощью обратных кавычек

console.log("кол-во слов", dog3.split(" ").length);

// спецсимволы вставляются экранированием \u{1F60D}

//Доступ к символам

const myString = "Привет";
myString[1] = "fff";
console.log("myString: ", myString[1]); //: myString.charAt(1) - то же самое

// Разница только в том, что если символ с такой позицией отсутствует, тогда [] вернёт undefined, а charAt — пустую строку:

for (let char of myString) {
  console.log("char: ", char);
}

// Строки неизменяемы!

//Изменение регистра - Методы toLowerCase() и toUpperCase() меняют регистр символов:
dog1.toLocaleLowerCase();
console.log("dog1: ", dog1);
const newDog1 = dog1.toLocaleLowerCase();
console.log("newDog1: ", newDog1);
const newDog2 = dog1.toUpperCase();
console.log("newDog2: ", newDog2);

// Поиск подстроки str.indexOf

// Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений.

const paragraph = "Если долго искать X, то можно его найти";
console.log(paragraph.indexOf("долго")); // 5 начинается с 5 index

//str.indexOf(substr, pos). pos - необязательный аргумент - поиск начиная с позиции

//Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле. Каждый раз, получив очередную позицию, начинаем новый поиск со следующей:

let str = "Ослик Иа-Иа посмотрел на виадук";

let target = "Иа"; // цель поиска

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Найдено тут: ${foundPos}`);
  pos = foundPos + 1; // продолжаем со следующей позиции
}

// str.lastIndexOf(substr, position);
// Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.
// Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки или начинающееся до (включительно) определённой позиции.
// При проверке indexOf в условии if есть небольшое неудобство. Такое условие не будет работать:

let str1 = "Widget with id         ";

if (str1.indexOf("Widget")) {
  console.log("Совпадение есть"); // не работает
}
// Мы ищем подстроку "Widget", и она здесь есть, прямо на позиции 0. Но alert не показывается, т. к. str.indexOf("Widget") возвращает 0, и if решает, что тест не пройден.
// Поэтому надо делать проверку на -1:

if (str1.indexOf("Widget") != -1) {
  console.log("Совпадение есть"); // теперь работает
}

// includes, startsWith, endsWith
// Более современный метод str.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет.
let str10 = "Widget with id";
console.log("str10.slice(6 , 5)", str10.slice(6, 11)); // без аргумента возвращает до каонца

// Также для start/end можно задавать отрицательные значения. Это означает, что позиция определена как заданное количество символов с конца строки:

// let str = "stringify";

// начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
// alert( str.slice(-4, -1) ); // gif

// str.substring(start [, end])
// Возвращает часть строки между start и end.

// Это — почти то же, что и slice, но можно задавать start больше end.

//Сравнение строк
// Как мы знаем из главы Операторы сравнения, строки сравниваются посимвольно в алфавитном порядке.

//Строки кодируются в UTF-16. Таким образом, у любого символа есть соответствующий код. Есть специальные методы, позволяющие получить символ по его коду и наоборот.

// str.codePointAt(pos)
// Возвращает код для символа, находящегося на позиции pos:
//String.fromCodePoint(code)
// Создаёт символ по его коду code

//Есть три типа кавычек. Строки, использующие обратные кавычки, могут занимать более одной строки в коде и включать выражения ${…}.
// Строки в JavaScript кодируются в UTF-16.
// Есть специальные символы, такие как \n, и можно добавить символ по его юникодному коду, используя \u….
// Для получения символа используйте [].
// Для получения подстроки используйте slice или substring.
// Для того, чтобы перевести строку в нижний или верхний регистр, используйте toLowerCase/toUpperCase.
// Для поиска подстроки используйте indexOf или includes/startsWith/endsWith, когда надо только проверить, есть ли вхождение.
// Чтобы сравнить строки с учётом правил языка, используйте localeCompare.
// Строки также имеют ещё кое-какие полезные методы:

// str.trim() — убирает пробелы в начале и конце строки.
// str.repeat(n) — повторяет строку n раз.
// …и другие, которые вы можете найти в справочнике.
// Также есть методы для поиска и замены с использованием регулярных выражений. Но это отдельная большая тема, поэтому ей посвящена отдельная глава учебника Регулярные выражения.

const mail = "ivanpetrov@mail.ru";

const index = mail.indexOf("@");

const output = mail.slice(index + 1);
console.log("output: ", output);

const pal = "летhrл";
const checkPalindrom = (str) => {
  let answer;

  for (let i = 0; i <= str.length / 2; i++) {
    let revertIndex = str.length - 1 - i;
    if (str[i] === str[revertIndex]) {
      answer = true;
    } else {
      answer = false;
      break;
    }
  }

  return answer;
};

console.log(checkPalindrom(pal));

const checkPalindrom2 = (str) => {
  const revertStr = str.split("").revert().join("");
  return str === revertStr;
};
console.log(checkPalindrom(pal));
