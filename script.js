// Game settings

const numberOfCells = 100;
const numberOfBombs = 90;
const maxScore = 5;
const bombsList = [16, 21, 3];

// Player score to keep tabs

let score = 0;

// Declaring HTML variables

const scoreCounter = document.querySelector('.score-counter');
const grid = document.querySelector('.grid');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again');

// Building HTML from JavaScript

for (i = 1; i = numberOfCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
}