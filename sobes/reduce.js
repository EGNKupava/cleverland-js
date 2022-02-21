const names = [
  {
    name: "Ilya",
    age: 10,
  },
  {
    name: "Mika",
    age: 20,
  },
  {
    name: "Kolya",
    age: 18,
  },
  {
    name: "Vasya",
    age: 18,
  },
  {
    name: "Olya",
    age: 17,
  },
];

//[Kolya, Mika]
const foo = (el) => {if(el.age >= 18) return el.name};
const foo2 = (el) => {if(el.age >= 18) return el};

const group = names
  .sort((a, b) => a.age - b.age)
  .map(foo)
  .filter((el) =>  el);

// console.log('group: ', group);

// { 18: ['Kolya', 'Vasya'], 20 : ['Mika]}
const group2 = names
  .filter(foo2)
  .reduce((acc, el) => {
    if (acc[el.age]) {
      acc[el.age].push(el.name)
    } else {
      acc[el.age] = [el.name];
    }
    return acc
  }, {});

console.log('group2: ', group2);

const myObj = {18: 18};
const age = '18';



const cash = ['100.4 $', '30.4 RUB', '60.4 BYN'];

function multiplyMoney(value)  {
  const money = Number.parseFloat(value);
  const currency = value.slice(money.toString().length);
  return `${money*2}${currency}`;
}

// const newFoo = cash.map(multiplyMoney);
// // console.log('newFoo: ', newFoo);s


// const numbers = [-1, 4, 0, -4, 20, 25, -1, 100];
// // [20,25, 100];
// // [4, 0, 20, 25, 100];
// // [0, 4, 20, 25, 100];
// function myFilter(item) {
//  return item >= 0;  
// };
// function mySort(a, b) {
//   return a - b;
// }

// const filteredArr = numbers.filter(myFilter).sort(mySort);


