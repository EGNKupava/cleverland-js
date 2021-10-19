fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

async function request() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();
  throw new Error("Error");
}
request()
  .then((res) => console.log(res))
  .catch((error) => error)
  .then((res) => console.log(res));

setTimeout(() => console.log("A"));

console.log("B");

const promise = new Promise((resolve, reject) => {
  console.log("C");
  setTimeout(() => console.log("D"));
  resolve("I");
});

promise.then((res) => console.log(res));

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log("gen: ", gen.next());
console.log("gen: ", gen.next());
console.log("gen: ", gen.next());
console.log("gen: ", gen.next());
