const fs = require('fs');
const input = fs
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(line => line.split(' ').map(Number));
const [M, N] = input[0];
const box = input.slice(1);
const queue = [];
let total = 0;
let riped = 0;

for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
        if (box[r][c] === 0) total++;
        if (box[r][c] === 1) {
            total++;
            riped++;
            
            queue.push([r, c]);
        }
    }
}

if (total === riped) {
    console.log(0);
    process.exit();
}

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
let index = 0;
let result;

while (index < queue.length) {
    const [cr, cc] = queue[index++];
    result = box[cr][cc];
    
    for (let i = 0; i < 4; i++) {
        const nr = cr + dr[i];
        const nc = cc + dc[i];
        
        if (nr < 0 || nr >= N) continue;
        if (nc < 0 || nc >= M) continue;
        if (box[nr][nc] !== 0) continue;
        
        riped++;
        box[nr][nc] = result + 1;
        queue.push([nr, nc]);
    }
}

console.log(riped < total ? -1 : result - 1);