let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxGuesses = 10;

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1);
    console.log(computerNumber)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById("inputBox").value);
    userNumbers.push(' ' + userNumber);
    document.getElementById("guesses").innerHTML = userNumbers;

    if (attempts < maxGuesses) {
        if (userNumber > computerNumber) {
            insertValues("<p>Your number is hight.</p>");
        } else if (userNumber < computerNumber) {
            insertValues("<p>Your number is low.</p>");
        } else {
            insertValues("<p>You got it right! :D</p>");
        }
    } else {
        insertValues("<p>You lose! :c</p>");
    }

    document.getElementById("inputBox").value = '';
    document.getElementById("inputBox").focus();

    function insertValues(text) {
        document.getElementById("textOutput").innerHTML = text;
        document.getElementById("attempts").innerHTML = ++attempts;

        if (text === "<p>You lose! :c</p>" || text === "<p>You got it right! :D</p>") {
            document.getElementById("inputBox").setAttribute('Readonly', 'Readonly');
            document.getElementById("compare").setAttribute('onclick', '');
        }
    }
}

function newGame() {
    window.location.reload();
}
