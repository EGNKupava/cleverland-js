function foo() {
  console.log(this);
}

function doFo(fn) {
  fn();
}

var a = { foo: foo };

doFo(a.foo);
