const diceOneNormal = "<i class='fi fi-br-dice-one'></i>";
const diceTwoNormal = "<i class='fi fi-br-dice-two'></i>";
const diceThreeNormal = "<i class='fi fi-br-dice-three'></i>";
const diceFourNormal = "<i class='fi fi-br-dice-four'></i>";
const diceFiveNormal = "<i class='fi fi-br-dice'></i>";
const diceSixNormal = "<i class='fi fi-br-dice-six'></i>";

const diceOneAtive = "<i class='fi fi-sr-dice-one'></i>";
const diceTwoAtive = "<i class='fi fi-sr-dice-two'></i>";
const diceThreeAtive = "<i class='fi fi-sr-dice-three'></i>";
const diceFourAtive = "<i class='fi fi-sr-dice-four'></i>";
const diceFiveAtive = "<i class='fi fi-sr-dice'></i>";
const diceSixAtive = "<i class='fi fi-sr-dice-six'></i>";

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const dice6 = document.getElementById("dice6");

function randomButton() {
  let resultado = Math.round(Math.random() * 5) + 1;
  document.getElementById("valorDado").innerHTML = resultado;

  if (resultado == 1) {
    dice1.innerHTML = diceOneAtive;
  } else if (resultado != 1) {
    dice1.innerHTML = diceOneNormal;
  }

  if (resultado == 2) {
    dice2.innerHTML = diceTwoAtive;
  } else if (resultado != 2) {
    dice2.innerHTML = diceTwoNormal;
  }

  if (resultado == 3) {
    dice3.innerHTML = diceThreeAtive;
  } else if (resultado != 3) {
    dice3.innerHTML = diceThreeNormal;
  }

  if (resultado == 4) {
    dice4.innerHTML = diceFourAtive;
  } else if (resultado != 4) {
    dice4.innerHTML = diceFourNormal;
  }

  if (resultado == 5) {
    dice5.innerHTML = diceFiveAtive;
  } else if (resultado != 5) {
    dice5.innerHTML = diceFiveNormal;
  }

  if (resultado == 6) {
    dice6.innerHTML = diceSixAtive;
  } else if (resultado != 6) {
    dice6.innerHTML = diceSixNormal;
  }
}
