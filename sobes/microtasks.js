queueMicrotask(() => {
  console.log("A");
});
console.log("B");

const callback = (mutations) => {};

const observer = new MutationObserver(callback);

const config = {
  attributes: true,
  childList: true,
  characterData: true,
};

observer.observe(targetNode, config);

observer.disconnect();
