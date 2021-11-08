const awailableNotes = {
  1000: 1,
  500: 2,
  100: 5,
  50: 100,
  30: 6,
};

// function iWantToGet(amountRequired, limits) {
//   const maxSum = Object.entries(limits).reduce(
//     (acc, [note, value]) => (acc += note * value),
//     0
//   );

//   if (maxSum < amountRequired) {
//     return console.log("Превышена максимальная сумма банкомата");
//   }
//   if (amountRequired <= 0) {
//     return console.log("Введите сумму");
//   }
//   let ost = amountRequired;
//   const sortedNominals = Object.entries(limits)
//     .map(([key, value]) => [Number(key), Number(value)])
//     .sort(([nominalA], [nominalB]) => nominalB - nominalA);

//   const sum = sortedNominals.reduce((acc, [note, value], index) => {
//     if (ost - note >= 0) {
//       const notesNeed = Math.floor(ost / note);
//       acc[note] = Math.min(notesNeed, value);
//       ost = ost - acc[note] * note;
//     }
//     return acc;
//   }, {});
//   if (ost > 0) {
//     return console.log("Не могу выдать сумму");
//   } else {
//     return sum;
//   }
// }

// console.log("iWantToGet: ", iWantToGet(1000, awailableNotes));
// console.log("iWantToGet: ", iWantToGet(200, awailableNotes));
// console.log("iWantToGet: ", iWantToGet(150, awailableNotes));
// console.log("iWantToGet: ", iWantToGet(120, awailableNotes));
// {30: 1, 100: 2}

function iWantToGet(amountRequired, limits) {
  const maxSum = Object.entries(limits).reduce(
    (acc, [note, value]) => acc + note * value,
    0
  );

  if (maxSum < amountRequired) {
    console.log("Не хватает бабла");
    return {};
  }

  const sortedNominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);

  function collect(amount, nominals) {
    if (amount === 0) return {};
    if (!nominals.length) return;

    let currentNominal = nominals[0];
    let availableNotes = limits[currentNominal];
    let notesNeeded = Math.floor(amount / currentNominal);
    let numberOfNotes = Math.min(availableNotes, notesNeeded);

    for (let i = numberOfNotes; i >= 0; i--) {
      let result = collect(amount - i * currentNominal, nominals.slice(1));

      if (result) {
        return i ? { ...result, [currentNominal]: i } : result;
      }
    }
  }

  return collect(amountRequired, sortedNominals);
}

// console.log("iWantToGet:120 ", iWantToGet(120, awailableNotes));
// console.log("iWantToGet: 1000", iWantToGet(1000, awailableNotes));
// console.log("iWantToGet: 200", iWantToGet(200, awailableNotes));
// console.log("iWantToGet: 150", iWantToGet(150, awailableNotes));
// console.log("iWantToGet: 120", iWantToGet(120, awailableNotes));

function iWantToGetCash(amountRequired, limits) {
  const sortedNominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);

  const getCash = (amount, notes) => {
    console.log("amount: ", amount);
    if (amount === 0) return {};
    if (!notes.length) return;

    const currNote = notes[0];
    const needNotes = Math.floor(amount / currNote);
    const avaliableNotes = awailableNotes[currNote];
    const notesNumber = Math.min(needNotes, avaliableNotes);

    for (let i = notesNumber; i >= 0; i--) {
      const currAmount = amount - i * currNote;
      const result = getCash(currAmount, notes.slice(1));
      if (result) {
        return i ? { ...result, [currNote]: i } : result;
      }
    }
  };

  return getCash(amountRequired, sortedNominals);
}

console.log("iWantToGetCash: ", iWantToGetCash(160, awailableNotes));
