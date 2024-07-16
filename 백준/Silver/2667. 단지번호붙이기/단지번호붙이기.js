const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const map = input.slice(1).map(row => row.split('').map(Number));
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
const result = [];

for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
        if (map[r][c] === 1) {
            map[r][c] = 0;
            result.push(traverse(r, c));
        }
    }
}

console.log(`${result.length}\n${result.sort((a, b) => a - b).join('\n')}`);

function traverse(r, c) {
    let cnt = 1;
    
    for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];
        
        if (nr < 0 || nr >= N) continue;
        if (nc < 0 || nc >= N) continue;
        if (map[nr][nc] === 0) continue;
        
        map[nr][nc] = 0;
        cnt += traverse(nr, nc);
    }
    
    return cnt;
}