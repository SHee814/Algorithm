const fs = require('fs');
const input = fs
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(line => line.split(' ').map(Number));
const [N, M] = input[0];
const grid = input.slice(1);
const map = grid.map(row => row.map(x => { return {0: 0, 1: -1, 2: 0}[x] }));
let ir, ic;

for (let r = 0 ; r < N; r++) {
    if (ir !== undefined && ic !== undefined) break;
    
    for (let c = 0; c < M; c++) {
        if (grid[r][c] === 2) {
            ir = r;
            ic = c;
            break;
        }
    }
}

const queue = [[ir, ic]];
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
let index = 0;

while (index < queue.length) {
    const [cr, cc] = queue[index++];
    
    for (let i = 0; i < 4; i++) {
        const nr = cr + dr[i];
        const nc = cc + dc[i];
        
        if (nr < 0 || nr >= N) continue;
        if (nc < 0 || nc >= M) continue;
        if (map[nr][nc] >= 0) continue;
        
        map[nr][nc] = map[cr][cc] + 1;
        queue.push([nr, nc]);
    }
}

console.log(map.map(row => row.join(' ')).join('\n'));