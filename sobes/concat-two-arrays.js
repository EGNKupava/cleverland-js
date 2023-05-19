// Соединить 2 отсортированных массива
const firstArr = [1, 2, 5, 10];
const secondArr = [4, 5, 7, 11, 12];

// Ожидаем [1,2,4,5,5,7,10,11,12]

const merge = (first, second) => {
  const result = first.concat(second);
  result.sort((a, b) => a - b);

  return result;
};

console.log('merge: ', merge(firstArr, secondArr));

const merge2 = (first, second) => {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < first.length || j < second.length) {
    const firstArrItem = first[i];
    const secondArrItem = second[j];

    if (firstArrItem === undefined) {
      result.push(secondArrItem);
      j += 1;
      continue;
    }
    if (secondArrItem === undefined) {
      result.push(firstArrItem);
      i += 1;
      continue;
    }

    if (firstArrItem === secondArrItem) {
      result.push(firstArrItem, secondArrItem);
      i += 1;
      j += 1;
      continue;
    }
    if (firstArrItem < secondArrItem) {
      result.push(firstArrItem);
      i++;
      continue;
    }
    if (secondArrItem < firstArrItem) {
      result.push(secondArrItem);
      j++;
    }
  }

  return result;
};

console.log('merge2: ', merge2(firstArr, secondArr));
