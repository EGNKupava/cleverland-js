const number = Number(prompt("Число"));

let sum = 0;

// for (let i = 0; i <= number; i++) {
//   sum += i;
// }

for (let i = 10; i < 100; i++) {
  let tens = Math.floor(i / 10);
  let ones = i % 10;
  let sum = tens + ones;
  if (sum % number === 0) {
    console.log(i);
  }
}

// console.log(sum);
