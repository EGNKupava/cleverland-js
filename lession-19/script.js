"use strict";

class Animal {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    alert(`${this.name} say Hi`);
  }
}

// Методы в классе не разделяются запятой
// Частая ошибка начинающих разработчиков – ставить запятую между методами класса, что приводит к синтаксической ошибке.

// Синтаксис классов отличается от литералов объектов, не путайте их. Внутри классов запятые не требуются.
const cat = new Animal("Кеша");

cat.sayHello();

// Вот что на самом деле делает конструкция class User {...}:

// Создаёт функцию с именем User, которая становится результатом объявления класса. Код функции берётся из метода constructor (она будет пустой, если такого метода нет).
// Сохраняет все методы, такие как sayHi, в User.prototype.

// Геттеры/сеттеры
// Геттер срабатывает, когда obj.propName читается, сеттер – когда значение присваивается.
class Predator {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
    this.speed = 0;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }
  ["Hi"]() {
    console.log("Method Hi");
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} стоит.`);
  }
}

const crocodile = new Predator("Гена", 400);
console.log("crocodile: ", crocodile);
console.log("crocodile.name: ", crocodile.name);

class Rabbit extends Predator {
  constructor(...args) {
    super(...args);
  }
  hide() {
    alert(`${this.name} прячется!`);
  }
}

const myRabbit = new Rabbit("Годзилла", 500);
myRabbit.run(5);

// Мы также можем присвоить метод самой функции-классу, а не её "prototype". Такие методы называются статическими.

class Car {
  constructor(name, label, engine) {
    this.name = name;
    this.label = label;
    this.engine = engine;
  }

  static staticMethod() {
    alert(this === Car); // true
  }
}

//Это фактически то же самое, что присвоить метод напрямую как свойство функции:

Car.staticMove = function () {
  alert(this === Car);
};

// Статические свойства

class Article {
  static publisher = "Илья Кантор";
}

alert(Article.publisher); // Илья Кантор

// Наследование статических свойств и методов
// Статические свойства и методы наследуются.
//Например, метод Animal.compare в коде ниже наследуется и доступен как Rabbit.compare:

class MyAnimal {
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

// Наследует от MyAnimal
class Hedgehog extends MyAnimal {
  hide() {
    alert(`${this.name} прячется!`);
  }
}

let rabbits = [new Hedgehog("Белый ежик", 15), new Hedgehog("Чёрный ежик", 5)];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Белый ежик бежит со скоростью 5.
