"use strict";

document.getElementById("2").addEventListener("click", func2);
// document.getElementById("3").addEventListener("click", func3);
// document.getElementById("4").addEventListener("click", func4);
// document.getElementById("5").addEventListener("click", func5);
// document.getElementById("6").addEventListener("click", func6);
// document.getElementById("7").addEventListener("click", func7);

const container = document.getElementById("container");

const x1 = 4;
const x2 = 56;
const x3 = 2;
const x4 = 22;

function multiply(params) {
  let mult = 1;
  params.forEach((item) => {
    mult *= item;
  });
  return mult;
}

function func1(a, b, ...rest) {
  console.log("rest: ", rest);
  const z = a + b;
  const mult = multiply(rest);
  const answer = z + mult;
  console.log("answer: ", answer);
}

document.getElementById("1").addEventListener("click", () => {
  func1(x1, x2, x3, x4);
});

function func2() {
  const arr = [3, 5, 1, 87, 3, 1];
  console.log("Math.max(...arr): ", Math.max(...arr));
}
