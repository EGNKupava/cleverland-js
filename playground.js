// 'use strict';
var name = 'evgen';
let user = {
  name: 'john',
  sayHi() {
    console.log('this.name', this.name);
  },
};

// user.sayHi();

const sayHi = user.sayHi.bind(user);

sayHi();
