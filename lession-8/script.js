// const name = "asdadd";
// const lastName = "sdffsdin";

const createObj = ({ userName, age, city = "orsha" }) => ({
  userName,
  age,
  city,
});

const obj3 = createObj({ age: undefined, userName: "vasya" });

const user = {
  name: "Kolya",
  lastName: "Pupkin",
  age: 18,
  adress: {
    city: "Орша",
    street: "sovetskaya",
    house: 22,
  },
  sayFullName() {
    console.log("(this.adress.city): ", this.adress.city);
    console.log("alert(this.name + this.lastName): ", this.name, this.lastName);
  },
};

user.sayFullName();

const cat = {
  color: "white",
  age: 5,
  isWalk: false,
  sayMay() {
    window.alert("may");
  },
  walk() {
    this.isWalk = true;
    window.alert("cat walk");
  },
  stop() {
    this.isWalk = false;
    window.alert("cat stop walk");
  },
};

function Cat(color, age, name) {
  this.name = name;
  this.color = color;
  this.age = age;
  this.isWalk = false;
  this.sayMay = function () {
    window.alert("may");
  };
  this.walk = function () {
    this.isWalk = true;
    window.alert("cat walk");
  };
  this.stop = function () {
    this.isWalk = false;
    window.alert("cat stop walk");
  };
}

const catVasya = new Cat("black", 10, "VAsya");
const catKesha = new Cat("white", 111, "KeshA");

// function Circle(deg, R) {
//   this.R = R;
//   this.deg = deg;
// }

// let myRadius = +prompt("Введите радиус");
// let myDeg = +prompt("Введите deg");

// const circle1 = new Circle(myRadius, myDeg);

// circle1.square = function () {
//   return (3.14 * this.R * this.deg) / 360;
// };

// const catKesha = new Cat("white", 20, "Kesha");
// const catKesha1 = new Cat("white1", 30, "Kesha1");

const obj = new Object(); // {}

// const user2 = Object.assign({}, user);

// user2.age = 40;
// user2.adress.city = "Vitebsk";

// console.log("user: ", user);
// console.log("user2: ", user2);

// let userJSON = JSON.stringify(user);
// let user2 = JSON.parse(userJSON);

// if ("name" in user)
//   for (let key in user) {
//     console.log("  user[key]: ", user[key]);
//   }

// const additionKeys = {
//   isAdmin: false,
//   room: 20,
// }

// user.name = "ASFGF";

// console.log('user: ', user);

// console.log('user: ', user);

// let myKey = prompt('Что интересует у пользователя');

// if (myKey === "все") {
//   for (let key in user) {
//     alert(`Свойство ${key} = ${user[key]}`);
//   }
// } else if (myKey in user) {
//   alert(`Свойство ${myKey} = ${user[myKey]}`);
// } else {
//   alert("Нет свойства");
// }

// const user2 = Object.assign({}, user);
// user2.name = "ghjhj";
// console.log("user2: ", user2);

// const salary = {
//   igor: 200,
//   egor: 300,
//   ivan: 500,
//   average() {
//     let sum = 0;
//     let count = 0;
//     let maxSalary = null;
//     let maxSalaryName = "";

//     for (let key in this) {
//       if (typeof this[key] === "number") {
//         sum += this[key];
//         count++;

//         if (this[key] > maxSalary) {
//           maxSalary = this[key];
//           maxSalaryName = key;
//         }
//       }
//     }
//     return {
//       average: sum / count,
//       maxSalary: maxSalary,
//       maxSalaryName: maxSalaryName,
//     };
//   },
// };

// console.log("salary.average();: ", salary.average());
