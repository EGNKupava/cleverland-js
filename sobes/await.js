const timeout = (callback) => {
  setTimeout(() => {
    callback("BAR");
  }, 5000);
};

const foo = async () => {
  const x = await new Promise((resolve) => timeout(resolve));
  console.log("x: ", x);
  console.log("FOOO");
};

foo();
