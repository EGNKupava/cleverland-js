"use strict";

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
