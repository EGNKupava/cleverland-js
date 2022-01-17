// function iWantToGet(amountRequired) {
//   const awailableNotes = [100, 50, 20, 10];
//   let currSum = amountRequired;
//   return awailableNotes.reduce((acc, note) => {
//     while (currSum - note >= 0) {
//       acc.push(note);
//       currSum -= note;
//     }
//     return acc;
//   }, []);
// }

// console.log("iWantToGet: ", iWantToGet(180));
function iWantToGet(amountRequired) {
  const awailableNotes = [10, 100, 50, 20];
  const sortAwailableNotes = awailableNotes.sort((a, b) => b - a);
  let amount = amountRequired;
  let notes = sortAwailableNotes.reduce((acc, note) => {
    while (amount - note >= 0) {
      acc.push(note);
      amount -= note;
    }
    return acc;
  }, []);
  return amount === 0 ? notes : [];
}

console.log("iWantToGet: ", iWantToGet(480));
console.log("iWantToGet: ", iWantToGet(185));

const awailableNotes2 = {
  500: 2,
  100: 5,
  50: 300,
  1000: 1,
  30: 8,
};
// НЕ ПРАВИЛЬНО!!!
function iWantToGet2(amountRequired) {
  const sortAwailableNotesArr = Object.keys(awailableNotes2).sort(
    (a, b) => b - a
  );
  let amount = amountRequired;
  let notes = sortAwailableNotesArr.reduce((acc, note) => {
    let numbers = awailableNotes2[note];

    while (amount - note >= 0 && numbers !== 0) {
      acc.push(note);
      amount -= note;
      numbers--;
    }
    return acc;
  }, []);
  return amount === 0 ? notes : "Не могу дать!!!";
}

console.log("iWantToGet2: ", iWantToGet2(1960));
