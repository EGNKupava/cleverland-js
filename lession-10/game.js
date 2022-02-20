function game() {
  let ques = confirm("решите задачу?");
  if (ques === false) {
    alert("sad");
    return;
  }

  let counter = 3;

  while (ques === true) {
    let task = Number(
      prompt(
        "A + A + A = 54\nB + B - A = 25\n6 + B + C = 50\nЧему будет равно А + В + С"
      )
    );
    let answ = 57;

    if (task >= 40 && task <= 67 && task != 57) {
      if (counter === 1) {
        alert("game over");
        break;
      } else {
        counter--;
        alert(`Близко. У вас осталось ${counter}`);
      }
    }

    if (task < 40 || task > 67) {
      if (counter === 1) {
        alert("game over");
        break;
      } else {
        counter--;
        alert(`Что-то не туда..У вас осталось ${counter}`);
      }
    }

    if (task === answ) {
      alert("Мозги видимо на месте");
      break;
    }
  }
}

game();
