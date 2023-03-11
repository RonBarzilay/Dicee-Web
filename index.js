function generateCubes() {
  randomNumber1 = Math.random() * 6; // 0-5.9999999
  randomNumber1 = Math.floor(randomNumber1) + 1; // 1 - 6

  randomNumber2 = Math.random() * 6; // 0-5.9999999
  randomNumber2 = Math.floor(randomNumber2) + 1; // 1 - 6

  document
    .querySelector("#first-cube img")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");

  document
    .querySelector("#second-cube img")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  checkWinner(randomNumber1, randomNumber2);
}

function checkWinner(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").textContent = "Player 1 Wins";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").textContent = "Player 2 Wins";
  } else {
    document.querySelector(".container h1").textContent = "Tha's a Draw";
  }
}

generateCubes();
