const myPupils = [
  {
    date: "2018-11-09",
    pupil: "Vasya",
  },
  {
    date: "2018-12-09",
    pupil: "Kolya",
  },
  {
    date: "2019-11-09",
    pupil: "Гена",
  },
];

const getGroup = (pupils) => {
  pupils.sort(
    (pupul1, pupul2) => Date.now(pupul1.date) - Date.now(pupul2.date)
  );

  return pupils.reduce((acc, { date, pupil }) => {
    const [year] = date.split("-");
    if (acc[year]) {
      acc[year].push(pupil);
    } else {
      acc[year] = [pupil];
    }
    return acc;
  }, {});
};

console.log(getGroup(myPupils));
