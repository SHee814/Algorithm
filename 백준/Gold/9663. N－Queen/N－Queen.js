const N = +require('fs').readFileSync(0, 'utf-8').toString().trim();
const board = Array.from(Array(N), () => new Array(N).fill(false));
let count = 0;

function checkQueen(r, c) {
    for (let i = 0; i < N; i++) {
        if (board[i][c]) return false;
    }
    
    for (let i = r, j = c; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) return false;
    }
    
    for (let i = r, j = c; i >= 0 && j < N; i--, j++) {
        if (board[i][j]) return false;
    }
    
    return true;
}

function dfs(row) {
    if (row === N - 1) {
        count++;
        return;
    }
    
    for (let nc = 0; nc < N; nc++) {
        const nr = row + 1;
        
        if (!checkQueen(nr, nc)) continue;
        
        board[nr][nc] = true;
        dfs(nr);
        board[nr][nc] = false;
    }
}

for (let i = 0; i < N; i++) {
    board[0][i] = true;
    dfs(0);
    board[0][i] = false;
}

console.log(count);