// 1.Написать свою реализацию функции debounce
// Чтобы в console вывелось только 5

// 2. Вывести еще Bob

const user = {
  firstName: 'Bob',
};

const fetchUrl = function (url) {
  // console.log(`fetching ${url}...`); // 1st st
  console.log(`fetching ${url}...`, this.firstName); // 2st st
};

// that's my but it too dificult
// function debounce(callback, delay) {
//   const queue = [];
//   return (...args) => {
//     const cb = () => {
//       if (queue.length) {
//         callback(...queue[queue.length - 1].args);
//         queue.forEach((item) => clearInterval(item.timerId));
//         queue.length = 0;
//       }
//     };
//     const timerId = setTimeout(cb, delay);
//     queue.push({timerId, args});
//   };
// }

function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// const fetching = debounce(fetchUrl, 300); // 1st
const fetching = debounce(fetchUrl.bind(user), 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);
