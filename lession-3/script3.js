let sum = 0;

while (true) {
  const number = prompt("Введите число");
  if (number) {
    sum = sum + Number(number);
  } else {
    break;
  }
}

alert(`Сумма чисел ${sum}`);
