'use strict';

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

//Cached 

const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscorerEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// UI Helpers
function setMessage(text) {
    messageEl.textContent = text;
}

function setNumber(value) {
    numberEl.textContent = value;
}

function setScore(value) {
    scoreEl.textContent = value;
}

function setHighscore(value) {
    highscorerEl.textContent = value;
}

function setBackground(color) {
    bodyEl.style.backgroundColor = color;
}

function disablePlay(disabled) {
    guessInputEl.disabled = disabled;
    checkBtnEl.disabled = disabled;
}

function clearInput() {
    guessInputEl.value = '';
}

// Game State Variables

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log(`Your Secret Number is:`, secretNumber);
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
    score = START_SCORE;
    secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderinitialUI() {
    setMessage(`Start Guessing...`);
    setNumber(`?`);
    setScore(score);
    clearInput();
    disablePlay(false);
    setBackground('');
}

renderinitialUI();

checkBtnEl.addEventListener('click', function() {
    const guess = Number (guessInputEl.value);
    console.log('Players guessed:', guess);

    if (!guess) return setMessage(`Input a Number`);

    if (guess < MIN_NUMBER|| guess > MAX_NUMBER) {
        return setMessage(`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}`);
    }

    if (guess === secretNumber) {
        setMessage(`Correct Number!`);
        setNumber(secretNumber);
        setBackground('green');
        if (score > highscore) {
            highscore = score;
            setHighscore(highscore);
        }
        disablePlay(true);
        clearInput();
        return;
    } 

    setMessage(guess > secretNumber ? `Too High!` : `Too Low!`);
    score--;
    setScore(score);

    if (score < 1) {
        setMessage(`You lost :(`);
        setNumber(secretNumber);
        setBackground('red');
        disablePlay(true);
        clearInput();
    }
});

againBtnEl.addEventListener('click', function() {
    resetGameState();
    renderinitialUI();
});

window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !checkBtnEl.disabled) {
        checkBtnEl.click();
    }
});

againBtnEl.addEventListener('click', function() {
    guessInputEl.focus();
});