var a = 5;

function foo() {
  if (a) {
    console.log(a);
    var a = 10;
  }
}
//--------------------------------------
// foo();

// console.log(c);
// var c = 7;

// console.log(b);
// let b = 11;

// ---------------------------------------

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
  const sortedArr = Object.entries(accObj).sort((a, b) => b[1] - a[1]);
  return sortedArr.map(([fruit]) => fruit);
};

// console.log("newArr(words): ", newArr(words));
