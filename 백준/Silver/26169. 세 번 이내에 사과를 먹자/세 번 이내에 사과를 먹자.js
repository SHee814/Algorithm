const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString().trim().split('\n')
    .map(row => row.split(' ').map(Number));
const board = input.slice(0, 5);
const [r, c] = input[5];
let result = false;

function findApple(cr, cc, move, apple) {
    if (result) return;
    if (move > 3) return;
    if (apple === 2) {
        result = true;
        return;
    }
    
    const dr = [0, 1, 0, -1];
    const dc = [1, 0, -1, 0];
    
    for (let i = 0; i < 4; i++) {
        const nr = cr + dr[i];
        const nc = cc + dc[i];
        
        if (nr < 0 || nr >= 5 || nc < 0 || nc >= 5 || board[nr][nc] < 0) continue;
        
        const storage = board[cr][cc];
        
        board[cr][cc] = -1;
        findApple(nr, nc, move + 1, apple + board[nr][nc]);
        board[cr][cc] = storage;
    }
}

findApple(r, c, 0, 0);

console.log(result ? 1 : 0);