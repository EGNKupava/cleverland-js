const foo = (n) => (m) => m + n;

const comFunc = foo(".com");

const string = "Привет";

const promise = new Promise((resolve, reject) => {
  resolve("DONE");
});

let s;
function baz() {
  // console.log(s);
}
promise.then((res) => {
  s = res;
  baz();
});

const value = fetch("URL")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log("value: ", value);
