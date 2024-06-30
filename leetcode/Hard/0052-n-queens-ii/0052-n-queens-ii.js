/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        const board_initial = Array.from(new Array(n), () => new Array(n).fill(false));
        board_initial[0][i] = true;
        placeQueen(0, i, board_initial);
    }

    return count;

    function checkValidPosition(r, c, board) {
        for (let i = 0; i < n; i++) {
            if (board[i][c]) return false;
        }

        for (let j = 1; j <= r; j++) {
            if (board[r - j][c - j]) return false;
            if (board[r - j][c + j]) return false;
        }

        return true;
    }

    function placeQueen(r, c, board) {
        if (r === n - 1) {
            count++;
            return;
        }

        for (let i = 0; i < n; i++) {
            if (!checkValidPosition(r + 1, i, board)) continue;

            const newBoard = Array.from(new Array(n), (_, row) => board[row].slice());
            newBoard[r + 1][i] = true;
            placeQueen(r + 1, i, newBoard);
        }
    }
};