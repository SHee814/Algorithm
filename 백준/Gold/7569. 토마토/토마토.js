const fs = require('fs');
const input = fs
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(line => line.split(' ').map(Number));
const [M, N, H] = input[0];
const box = [];
const queue = [];
let total = 0;
let riped = 0;
                       
for (let i = 1; i <= N * H; i += N) {
    box.push(input.slice(i, i + N));
}

for (let h = 0; h < H; h++) {
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < M; c++) {
            if (box[h][r][c] === 0) total++;
            if (box[h][r][c] === 1) {
                total++;
                riped++;
            
                queue.push([h, r, c]);
            }   
        }
    }
}

if (total === riped) {
    console.log(0);
    process.exit();
}

const dh = [0, 0, 0, 0, 1, -1];
const dr = [-1, 0, 1, 0, 0, 0];
const dc = [0, 1, 0, -1, 0, 0];
let index = 0;
let result;

while (index < queue.length) {
    const [ch, cr, cc] = queue[index++];
    result = box[ch][cr][cc];
    
    for (let i = 0; i < 6; i++) {
        const nh = ch + dh[i];
        const nr = cr + dr[i];
        const nc = cc + dc[i];
        
        if (nh < 0 || nh >= H) continue;
        if (nr < 0 || nr >= N) continue;
        if (nc < 0 || nc >= M) continue;
        if (box[nh][nr][nc] !== 0) continue;
        
        riped++;
        box[nh][nr][nc] = result + 1;
        queue.push([nh, nr, nc]);
    }
}

console.log(riped < total ? -1 : result - 1);