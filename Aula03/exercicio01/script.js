const diceIcons = [
  "<i class='fi fi-br-dice-one'></i>",
  "<i class='fi fi-br-dice-two'></i>",
  "<i class='fi fi-br-dice-three'></i>",
  "<i class='fi fi-br-dice-four'></i>",
  "<i class='fi fi-br-dice'></i>",
  "<i class='fi fi-br-dice-six'></i>",
];

function randomButton() {
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");

  const resultado1 = Math.floor(Math.random() * 6);
  const resultado2 = Math.floor(Math.random() * 6);

  dice1.innerHTML = diceIcons[resultado1];
  dice2.innerHTML = diceIcons[resultado2];

  document.getElementById("valorDado1").innerHTML = (resultado1 + 1);
  document.getElementById("valorDado2").innerHTML = (resultado2 + 1);
}
