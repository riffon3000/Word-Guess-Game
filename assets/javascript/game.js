// Initialize array of computerWord and guesses.
var computerWord = ["f", "a", "m", "e"];
var guesses = ["_", "_", "_", "_"];
// Initialize variables that reference to place where to display in HTML.
var guessesText = document.getElementById("guesses-text");
var msgText = document.getElementById("msg-text");
// Keypress returns to letter() function
document.onkeyup = function (event) {
    var keyPress = event.key;
    console.log(keyPress);
    return letter(keyPress);
}
// function that checks keyPress
function letter(guessed) {
    var userGuess = false;
    var guessAgain = false;
    for (var i = 0; i < computerWord.length; i++) {
        if (computerWord[i] === guessed) {
            guesses[i] = guessed;
            userGuess = true;
        }
        if (guesses[i] === "_") {
            guessAgain = true;
        }
    }
    if (userGuess) {
        msgText.textContent = "Nice, keep it up!";
        guessesText.textContent = guesses.join(" ");
        if (!guessAgain) {
            msgText.textContent = "Woohoo!";
        }
    } else {
        msgText.textContent = "Nope! Guess again";
    }
}

