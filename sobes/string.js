// let str = "Hello Cleverland";
// console.log("str[0]", str[0]);

//Методы строк

// Дана функция, она принимает в качестве аргументов строки
// '*', '1', 'b', '1c',
// реализуйте ее так, что бы она вернула строку '1*b*1c'
function getString() {
  let str = "";
  console.log(arguments);
  if (arguments.length >= 2) {
    str = arguments[1];
    for (let i = 2; i < arguments.length; i++) {
      str = str + arguments[0] + arguments[i];
    }
  }

  return console.log(str);
}
getString("*", "1", "2", "1c", "b");
