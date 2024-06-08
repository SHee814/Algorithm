const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(row => row.split(' ').map(Number));
const [N, M] = input[0];
const board = input.slice(1);
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
const visited = Array.from(new Array(N), () => new Array(M).fill(false));
let answer = 0;

for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
        visited[r][c] = true;
        placeLinear(r, c, 1, board[r][c]);
        visited[r][c] = false;
        placeForked(r, c);
    }
}

console.log(answer);

function placeLinear(r, c, cnt, sum) {
    if (cnt === 4) {
        answer = Math.max(answer, sum);
        return;
    }
    
    for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];
        
        if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;
        if (visited[nr][nc]) continue;
        
        visited[nr][nc] = true;
        placeLinear(nr, nc, cnt + 1, sum + board[nr][nc]);
        visited[nr][nc] = false;
    }
}

function placeForked(r, c) {
    const surrounds = [];
    
    for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];
        
        if (nr < 0 || nr >= N || nc < 0 || nc >= M) {
            surrounds.push(0);
        } else {
            surrounds.push(board[nr][nc]);
        }
    }
    
    const sum = board[r][c] + surrounds.reduce((acc, x) => acc + x, 0);
    
    for (let i = 0; i < 4; i++) {
        answer = Math.max(sum - surrounds[i], answer);
    }
}