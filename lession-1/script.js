"use strict";

window.alert("Сообщение со внешнего файла");

// string
// number
// bigInt
// boolean
// null
// undefined
// object
// symbol


let name = 'VacaV';

function checkStr(str) {
  for (let i = 0; i < str.length / 2; i++) {
    let j = str.length - 1 - i;
  
    if ( str[i] !==  str[j]) {
      return false;
    }
  } 
  return true;
}

console.log('checkStr: ', checkStr(name));


function checkStr2(str) {
  return str === str.split('').reverse().join('');
}

let num = Number(prompt('Введите число'));

function multiply(n) {
  if (!Number.isNaN(n)) {
    return n**2;
  }
  return;
}

multiply(num);