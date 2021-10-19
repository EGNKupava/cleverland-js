var a = 15;

function foo() {
  var a = 25;
  var result = function () {
    console.log(a); // Если в консоль выводить this.a, то 45
  };

  result.a = 35;
  return result;
}

var bar = foo().bind({ a: 45 });

bar();
