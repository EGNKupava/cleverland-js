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
  const awailableNotes = [100, 50, 20, 10];
  let amount = amountRequired;
  const notes = awailableNotes.reduce((acc, note) => {
    while (amount - note >= 0) {
      acc.push(note);
      amount -= note;
    }
    return acc;
  }, []);
  return amount === 0 ? notes : [];
}

console.log("iWantToGet: ", iWantToGet(180));
console.log("iWantToGet: ", iWantToGet(185));
