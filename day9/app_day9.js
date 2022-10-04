const inputMax = document.getElementById("maxNum");
const inputGuess = document.getElementById("guessNum");
const playBtn = document.querySelector("button");
const choices = document.getElementById("choice");
const result = document.getElementById("result");
let MAX;
let GUESS;
let MACHINE;

//console.dir(playBtn);

function onMaxChange(event) {
  MAX = parseInt(inputMax.value);
  //console.log(MAX);
  //localStorage.getItem("max", MAX);
}

function onGuessChange(event) {
  GUESS = parseInt(inputGuess.value);
  //console.log(GUESS);
  //localStorage.getItem("guess", GUESS);
}

function onPlayClick(event) {
  event.preventDefault();
  if (isNaN(MAX) || isNaN(GUESS)) {
    alert("Select your number, then you can play the game");
  } else {
    MACHINE = Math.ceil(Math.random() * MAX);
    choices.innerHTML = `You chose: ${GUESS}, the machine chose: ${MACHINE}.`;
    if (GUESS === MACHINE) {
      result.innerHTML = "You won!";
    } else {
      result.innerHTML = "You lost!";
    }
  }
}

inputMax.addEventListener("change", onMaxChange);
inputGuess.addEventListener("change", onGuessChange);
playBtn.addEventListener("click", onPlayClick);