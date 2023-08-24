const players = ['X', 'O'];
let activePlayer = 0;
var playerWin = false;
const winner = document.getElementById('winner');

const reset = document.getElementById('reset');

reset.addEventListener('click', resetGame);

function resetGame() {
    playerWin = false;
    winner.innerHTML = '';
    const cells = document.getElementsByClassName('cell')
    for (let i = 0; i < cells.length; i++) {
        cells[i].value = '';
    }
}

function selectArea(e) {
    var position = document.getElementById(e);
    if (position.value === "" && !playerWin) {
        position.value = players[activePlayer];
        lineCompleted();
        activePlayer = players[activePlayer] === 'X' ? 1 : 0;
    }
}

const combinationsToWin = [
    [0, 1, 2], // Horizontal
    [3, 4, 5], // Horizontal
    [6, 7, 8], // Horizontal
    [0, 3, 6], // Vertical
    [1, 4, 7], // Vertical
    [2, 5, 8], // Vertical
    [0, 4, 8], // Diagonal
    [2, 4, 6] // Diagonal
]

function lineCompleted() {
    const cells = document.getElementsByClassName('cell')
    for (let i = 0; i < combinationsToWin.length; i++) {
        const [a, b, c] = combinationsToWin[i];
        if (cells[a].value && cells[a].value === cells[b].value && cells[a].value === cells[c].value) {
            playerWin = true;
            winner.innerHTML = `Player ${cells[a].value} won!`;
        }
    }
}