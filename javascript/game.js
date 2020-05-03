//The array of letter choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Declaring the number of guesses
var numGuesses = 0;

//Declaring the number of wins
var wins = 0;

//Declaring the number of losses
var losses = 0;

//Declaring the number of guesses left
var guessesLeft = 9;

//An array of the specific letters that the user typed.
var guesses = [];

//An empty array in which we'll push the randomly selected letters into
var compuChoice = [];

//Delcaring the number of wins for the player
var wins = 0;

//Delcaring the number of losses for the player
var losses = 0;


//Logic to randomly select a letter for the player to guess
window.onload = function () {
    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    compuChoice.push(randomLetter);

    console.log(randomLetter);
    console.log(compuChoice);
}

//on key up event push player Guess into the guesses array

document.onkeyup = function (event) {
    var playerGuess = event.key;
    guesses.push(playerGuess);

    console.log(guesses);
}