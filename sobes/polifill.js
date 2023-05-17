(function () {
  Array.prototype.myMap = function (callback, thisArg) {
    if (this == null || this === window) {
      throw TypeError('myMap called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw TypeError(`{callback} is not a function`);
    }
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr[i] = callback.call(thisArg, this[i], i, this);
    }
    return newArr;
  };
})();
