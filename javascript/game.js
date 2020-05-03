//The array of letter choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



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
}

//on key up event push player Guess into the guesses array

document.onkeyup = function (event) {
    var playerGuess = event.key;
    guesses.push(playerGuess);

    console.log(guesses);


    if ((playerGuess === compuChoice[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        guesses.length = 0;
        compuChoice.length = 0;
        var randomLetter = letters[Math.floor(Math.random() * letters.length)];
        compuChoice.push(randomLetter);

        console.log(randomLetter);
    }
    else if ((playerGuess !== compuChoice[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
    }

    else {
        losses++;
        guessesLeft = 9;
        guesses.length = 0;
        compuChoice.length = 0;
        var randomLetter = letters[Math.floor(Math.random() * letters.length)];
        compuChoice.push(randomLetter);
        console.log(compuChoice[0]);
    }

    var html = "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + guesses + "</p>";

    document.querySelector("#startGame").innerHTML = html;

}