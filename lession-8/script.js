
const user = {
  "name": 'Kolya',
  "last-name": 'Pupkin',
  "age": 18,
  "adress": "Орша",
};

const additionKeys = {
  isAdmin: false,
  room: 20,
}

user.name = "ASFGF";

console.log('user: ', user);

// console.log('user: ', user);

// let myKey = prompt('Что интересует у пользователя');

if (myKey === 'все') {
   for (let key in user) {
     alert(`Свойство ${key} = ${user[key]}`);
   }
 } else if (myKey in user) {
    alert(`Свойство ${myKey} = ${user[myKey]}`);
  } else {
    alert('Нет свойства')
  }

const user2 = Object.assign({}, user);
user2.name = "ghjhj";
console.log('user2: ', user2);

