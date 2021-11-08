const availableNotes = {
  1000: 1,
  500: 2,
  100: 5,
  50: 100,
  30: 6,
};

const iWantCash = (cash, availNotes) => {
  const sortedNotes = Object.keys(availNotes).sort((a, b) => b - a);

  const maxSum = Object.entries(availNotes).reduce(
    (acc, [note, count]) => acc + note * count,
    0
  );

  if (cash > maxSum) return console.log('"Не могу выдать сумму"');

  const getCash = (notes, needCash) => {
    if (needCash === 0) return {};
    if (!notes.length) {
      return;
    }

    const currentNote = notes[0];
    const availableNotesNum = availNotes[currentNote];
    const notesNeeed = Math.floor(needCash / currentNote);
    const actualNotesNum = Math.min(availableNotesNum, notesNeeed);

    const restCash = needCash - actualNotesNum * currentNote;

    const result = getCash(notes.slice(1), restCash);

    return actualNotesNum
      ? { ...result, [currentNote]: actualNotesNum }
      : result;
  };

  return getCash(sortedNotes, cash);
};

console.log("iWantCash(200, availableNotes): ", iWantCash(200, availableNotes));
console.log("iWantCash(200, availableNotes): ", iWantCash(150, availableNotes));
console.log(
  "iWantCash(200, availableNotes): ",
  iWantCash(15000, availableNotes)
);
