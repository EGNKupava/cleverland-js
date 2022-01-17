function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

console.log(sum(2)(3) == 5); // true

// sum(2, 3); // 5

const app = document.getElementById("app");

let maxLevel = 0;
const getCount = (node, level) => {
  if (level > maxLevel) maxLevel = level;
  if (node.children.length) {
    level++;
    Array.from(node.children).forEach((element) => {
      getCount(element, level);
    });
  }
  return maxLevel;
};

console.log("getCount(app): ", getCount(app, 0));
