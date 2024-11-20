const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(row => row.split(' ').map(Number));
const dr = [0, 1, 0, -1];
const dc = [1, 0, -1, 0];
let answer = N * M * 2;

for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
        const P = board[r][c]
        
        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            
            if (nr < 0 || nr >= N || nc < 0 || nc >= M) {
                answer += P;
                continue;
            }
            
            const Q = board[nr][nc];
            
            answer += Math.abs(P - Q) / 2;
        }
    }
}

console.log(answer);