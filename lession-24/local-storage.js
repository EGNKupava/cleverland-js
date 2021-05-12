"use strict";

const tableData = document.getElementById("table-data");
const addButton = document.getElementById("add");
const inputPurchase = document.getElementById("input-purchase");

const savedValues = localStorage.getItem("purchases") || null;
tableData.innerHTML = JSON.parse(savedValues);

addButton.addEventListener("click", () => {
  const value = inputPurchase.value;
  tableData.insertAdjacentHTML("beforeend", `<tr><td>${value}</td></tr>`);
  inputPurchase.value = "";
  const data = tableData.innerHTML;
  localStorage.setItem("purchases", JSON.stringify(data));
});
