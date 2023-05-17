var a = 15;

function foo() {
  var a = 25;
  var result = function () {
    console.log(a); // 25, но если в консоль выводить this.a, то 45
    console.log('this.a', this.a);
  };

  result.a = 35;
  return result;
}

var bar = foo().bind({a: 45});

bar();

const bar2 = foo();
bar2();
