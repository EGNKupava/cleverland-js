//sum(1) // 1
//sum(1)(2)(3) // 1 3 6

const sum = (num) => {
  let acc = num;
  console.log(acc);
  const func = (num2) => {
    acc += num2;
    console.log(acc);
    return func;
  };
  return func;
};

sum(1);
sum(1)(2)(3);
