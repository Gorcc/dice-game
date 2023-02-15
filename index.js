var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var winner = document.getElementById("winner");
console.log(randomNumber1);

var randomDice = "images/" + "dice" + randomNumber1 + ".png";
console.log(randomDice);
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
dice1.setAttribute("src", randomDice);
var randomDice = "images/" + "dice" + randomNumber2 + ".png";
dice2.setAttribute("src", randomDice);

if (randomNumber2 > randomNumber1) {
  winner.innerHTML = "Player 2 is the winner!";
} else if (randomNumber1 > randomNumber2) {
  winner.innerHTML = "Player 1 is the winner!";
} else {
  winner.innerHTML = "It's a draw!";
}
