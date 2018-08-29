var computerWord = ["f", "a", "m", "e"];
var guesses = ["_", "_", "_", "_"];
var guessesText = document.getElementById("guesses-text");
var msgText = document.getElementById("msg-text");

document.onkeyup = function(event){
    var keyPress = event.key;
    return letter(keyPress);
}

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

