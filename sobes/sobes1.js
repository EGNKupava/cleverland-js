// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом,
// и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
// Палиндромы это слова которые читаются слева направо и наоборот одинаково, например анна,

const palindrom = "вапро, ,орпав";
const notPalindrom = "вапро,рпав";

const checkIsPalindrom = (word) => {
  const reverseWord = word.split("").reverse().join("");
  return reverseWord === word;
};

console.log("checkIsPalindrom(palindrom);", checkIsPalindrom(palindrom));
console.log("checkIsPalindrom(notPalindrom);", checkIsPalindrom(notPalindrom));
// затрачено 5мин

// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения.
// Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// Аннаграммы это слова из одного набора букв, например мир-рим, ритм-мирт и так далее

const checkIsAnagrams = (wordOne, wordTwo) => {
  const punctuationMarks = [" ", ",", ".", "!", "?"];
  const uniqueStrFromWordOne = wordOne
    .toLowerCase()
    .split("")
    .filter((symbol) => !punctuationMarks.includes(symbol))
    .sort()
    .join();
  const uniqueStrFromWordTwo = wordTwo
    .toLowerCase()
    .split("")
    .filter((symbol) => !punctuationMarks.includes(symbol))
    .sort()
    .join();
  return uniqueStrFromWordOne === uniqueStrFromWordTwo;
};

console.log(checkIsAnagrams("мИр", "Рим"));
console.log(checkIsAnagrams("мир", "ритм"));
// затрачено 15мин

// Преобразование массива в объект с группировкой и фильтрацией элементов
// Напишите функцию, которая на вход принимает массив из студентов, где студент — это объект с полями «имя», «возраст» и «номер группы»
// {name: string, age: number, groupId: number},
// а на выходе возвращает объект, где ключ — это номер группы, а значение — массив из студентов старше 17 лет.

const newStudents = [
  {
    name: "Илья",
    age: 18,
    groupId: 11,
  },
  {
    name: "Вася",
    age: 17,
    groupId: 31,
  },
  {
    name: "Юля",
    age: 18,
    groupId: 31,
  },
  {
    name: "Коля",
    age: 23,
    groupId: 21,
  },
];

const getGroups = (students) => {
  const adultStudents = students.filter(({ age }) => age > 17);
  return adultStudents.reduce((groupObj, { name, groupId }) => {
    if (groupObj[groupId]) {
      groupObj[groupId].push(name);
    } else {
      groupObj[groupId] = [name];
    }
    return groupObj;
  }, {});
};

console.log("getGroups: ", getGroups(newStudents));
// Время 15 мин;
