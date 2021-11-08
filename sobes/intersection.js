// Даны 2 массива чисел
// Создать новый массиа из пересечения массивов и отсортировать его в возрастающем порядке

const arrNum1 = [1, 3, 5, 12, 10, 123, 3];
const arrNum2 = [2, 3, 10, 12, 2, 4];

const intersectionArr = arrNum1.reduce((set, item) => {
  if (arrNum2.includes(item)) {
    set.add(item);
  }
  return set;
}, new Set());

const newArr = Array.from(intersectionArr);

console.log("newArr: ", newArr);
