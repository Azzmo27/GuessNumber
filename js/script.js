console.log("Jeg er i guessNumber");

let randomNum = 0;
let score = 20;
let topScore = 0;

function generateRandomNumber() {
    randomNum = Math.floor(Math.random() * 20) + 1;
}

function handleGuess() {
    const userGuess = parseInt(guessInput.value, 10);

    if (userGuess === randomNum) {
        onCorrectGuess();
    } else {
        onWrongGuess(userGuess);
    }
}

function onCorrectGuess() {
    document.body.style.backgroundColor = "#48ff00";
    messageLabel.textContent = "Du har gættet tallet!";
    numberLabel.textContent = randomNum;
    checkButton.disabled = true;

    if (score > topScore) {
        topScore = score;
        highScoreLabel.textContent = topScore;
    }
}

function onWrongGuess(guess) {
    if (guess < 1 || guess > 20) {
        invalidGuess();
    } else {
        updateScore();
        displayHint(guess);
    }
}

function invalidGuess() {
    messageLabel.textContent = "The number does not exist, try again";
    document.body.style.backgroundColor = "#222";
}

function displayHint(guess) {
    document.body.style.backgroundColor = "#ff0000";

    if (guess > randomNum) {
        messageLabel.textContent = "Too high!";
    } else {
        messageLabel.textContent = "Too low!";
    }
}

function updateScore() {
    score--;
    scoreLabel.textContent = score;

    if (score <= 0) {
        messageLabel.textContent = "you lost!";
        checkButton.disabled = true;
        score = 20;
    }
}

function restartGame() {
    generateRandomNumber();
    score = 20;
    resetUI();
}

function resetUI() {
    messageLabel.textContent = "Start guessing...";
    numberLabel.textContent = "?";
    scoreLabel.textContent = score;
    guessInput.value = "";
    document.body.style.backgroundColor = "#222";
    checkButton.disabled = false;
}


const messageLabel = document.querySelector(".message");
const numberLabel = document.querySelector(".number");
const scoreLabel = document.querySelector(".score");
const highScoreLabel = document.querySelector(".highscore");
const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");


againButton.addEventListener("click", restartGame);
checkButton.addEventListener("click", handleGuess);

restartGame();
