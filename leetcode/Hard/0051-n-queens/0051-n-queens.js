/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        const board_initial = Array.from(new Array(n), () => new Array(n).fill('.'));

        board_initial[0][i] = 'Q';
        placeQueen(0, i, board_initial);
    }

    return result;

    function checkValidPosition(r, c, board) {
        for (let i = 0; i < n; i++) {
            if (board[r][i] === 'Q') return false;
            if (board[i][c] === 'Q') return false;
        }

        for (let j = 1; j < r; j++) {
            if (board[r - j][c - j] === 'Q') return false;
            if (board[r - j][j - c] === 'Q') return false;
        }

        return true;
    }

    function placeQueen(r, c, board) {
        if (r === n - 1) {
            result.push(board.map(row => row.join('')));
            return;
        }

        for (let i = 0; i < n; i++) {
            if (checkValidPosition(r + 1, i, board)) continue;

            const newBoard = Array.from(new Array(n), (_, i) => board[i].slice());
            
            newBoard[r + 1][i] = 'Q';
            placeQueen(r + 1, i, newBoard);
        }
    }
};