// Строковое преобразование

let userNumber = 10;

let userNumberString = String(userNumber);

console.log("тип userNumberString", typeof userNumberString);

let myString = "543545";

console.log("тип myString", typeof myString); // string

let num = Number(myString); // становится числом 123

console.log("тип num", typeof num);

let stringToNumber = myString; // оператор + унарный

console.log("тип stringToNumber", typeof stringToNumber);

let bool = true;

let bool2 = !bool;

let admin;
let userName = "Джон";

admin = userName;

userName = "Vsya";

alert(admin);
