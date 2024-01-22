let currentPlayer = 'X';
let moves = 0;

let cells = document.querySelectorAll("td");

for (let cell of cells) {
    cell.addEventListener("click", function () {
        makeMove(cell.id.slice(-1));
    });
}

function makeMove(cellNumber) {
    let cell = document.getElementById('row' + cellNumber);

    if (!cell.innerText && moves < 9) {
        cell.innerText = currentPlayer;
        moves++;

        if (moves >= 5) {
            if (checkForWin()) {
                alert('Player ' + currentPlayer + ' wins!');
                resetGame();
                return;
            }
        }
        if (moves === 9 && !checkForWin()) {
            alert('It\'s a tie!');
            resetGame();
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkForWin() {
    let winningCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];

    for (let combination of winningCombinations) {
        let [a, b, c] = combination;
        if (cells[a - 1].innerText && cells[a - 1].innerText === cells[b - 1].innerText && cells[b - 1].innerText === cells[c - 1].innerText) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    Array.from(cells).forEach(cell => {
        cell.innerText = '';
    });
    currentPlayer = 'X';
    moves = 0;
}
