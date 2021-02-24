

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource =  randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


var fristName = prompt("enter the name of frist player ");
var secondName = prompt("enter the name of second player ");


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 " + fristName + " is a winner!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML =  secondName + " is a winner! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
