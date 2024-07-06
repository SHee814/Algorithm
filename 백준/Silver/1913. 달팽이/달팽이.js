const fs = require('fs');
const [N, target] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const dr = [1, 0, -1, 0];
const dc = [0, 1, 0, -1];
const table = Array.from(new Array(N), () => new Array(N).fill(0));
let targetR, targetC;
let dir = 0;
let r = 0;
let c = 0;

for (let i = N ** 2; i > 0; i--) {
    table[r][c] = i;
    
    if (i === target) {
        targetR = r + 1;
        targetC = c + 1;
    }
    
    if (i === 1) break;
    
    let nr = r + dr[dir];
    let nc = c + dc[dir];
    
    while (nr < 0 || nr >= N || nc < 0 || nc >= N || table[nr][nc] > 0) {
        dir = (dir + 1) % 4;
        nr = r + dr[dir];
        nc = c + dc[dir];
    }
    
    r = nr;
    c = nc;
}

console.log(`${table.map(row => row.join(' ')).join('\n')}\n${targetR} ${targetC}`);