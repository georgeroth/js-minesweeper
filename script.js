// Game settings

const numberOfCells = 100;
const numberOfBombs = 20;
const maxScore = 10;
const bombsList = [16, 21, 3];

// Player score to keep tabs

let score = 0;

// Update score

function updateScore() {
    score++;
    scoreAmount.innerText = score.toString().padStart(5, '0');

    if (score === maxScore) {
        endGameWon()
    }
}

// Declaring HTML variables

const scoreAmount = document.querySelector('.score-amount');
const grid = document.querySelector('.grid');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again');
const bombsAmount = document.querySelector('.bombs-amount')

// Display amount of bombs

bombsAmount.innerText = numberOfBombs.toString().padStart(5, '0');

// Building grid html from JavaScript

for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.addEventListener('click', function () {
        if (bombsList.includes(i)) {
            cell.classList.add('cell-bomb');
            cell.innerText = '💣'
            endGameLost();
        } else {
            updateScore();
        }
        cell.classList.add('cell-clicked');
    })

    grid.appendChild(cell);
}

// Add random bombs

while (bombsList.length < numberOfBombs) {
    // Generate random number
    const randomNumber = Math.floor(Math.random() * numberOfCells) + 1;
    
    if (!bombsList.includes(randomNumber)) {
        bombsList.push(randomNumber)
    }
}

// End game

function endGameWon() {
    endGameText.innerHTML = 'YOU<br>WON';
    endGameScreen.classList.add('win');
    endGameScreen.classList.remove('hidden');
}

function endGameLost() {
    endGameText.innerHTML = 'GAME<br>OVER';
    endGameScreen.classList.remove('hidden');
}

// Play again button

playAgainButton.addEventListener('click', function() {
    window.location.reload()
})