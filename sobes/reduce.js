getObj = (name) => ({
  name,
  age: 12,
});

const names = ["Kolya", "Vasya", "XUI"];

const namesObj = names.reduce((acc, name) => {
  return [...acc, getObj(name)];
}, []);
console.log("namesObj: ", namesObj);
