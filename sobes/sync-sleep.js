//Написать синхронный sleep

const sleep = (duration) => {
  let start = Date.now();
  let end = start;
  const finishTime = start + duration;
  while (end < finishTime) {
    end = Date.now();
  }
};

console.log('start');

sleep(5000);

console.log('end');
