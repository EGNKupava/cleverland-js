var a = 5;

function foo() {
  if (a) {
    console.log(a);
    var a = 10;
  }
}
//--------------------------------------
foo();

// console.log(c);
// var c = 7;

// console.log(b);
// let b = 11;

// ---------------------------------------
const inc = (() => {
  let counter = 0;
  return () => ++counter;
})();

// console.log("inc();: ", inc()); // 1
// console.log("inc();: ", inc()); // 2

let words = [
  "banana",
  "grapefruit",
  "banana",
  "orange",
  "banana",
  "grapefruit",
];

let newArr = (words) => {
  const accObj = words.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  console.log("accObj: ", accObj);
  const sortedArr = Object.entries(accObj).sort((a, b) => b[1] - a[1]);
  return sortedArr.map(([fruit]) => fruit);
};

//--------------------
console.log("newArr(words): ", newArr(words));
// Еще решение

let acc = 0;
const sum = (num) => {
  acc = acc + num;
  return (n) => {
    if (n) return sum(n);
    return acc;
  };
};

// console.log("sum: ", sum(1)(2)(5)(4)());

const summ = (a, b) => a + b;
const mult = (a, b) => a * b;

const calc = (n) => (arg1) => (arg2) => n(arg1, arg2);

// console.log("calc(sum)(3)(2);: ", calc(summ)(3)(2));
// console.log("calc(sum)(3)(2);: ", calc(mult)(3)(2));

const cat = {
  catName: "Vasya",
  sayName() {
    setTimeout(() => {
      console.log(this.catName);
    });
  },
};

cat.sayName();
