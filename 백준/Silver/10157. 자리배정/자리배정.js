const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [C, R] = input[0].split(' ').map(Number);
const K = +input[1];
const hall = Array.from(new Array(R), () => new Array(C).fill(false));
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
let cr = R - 1;
let cc = 0;
let dir = 0;
let k = 1;

if (K > R * C) {
    console.log(0);
    process.exit();
}

while (k < K) {
    hall[cr][cc] = true;
    
    let nr = cr + dr[dir];
    let nc = cc + dc[dir];
    
    while (nr < 0 || nr >= R || nc < 0 || nc >= C || hall[nr][nc]) {
        dir = (dir + 1) % 4;
        nr = cr + dr[dir];
        nc = cc + dc[dir];
    }
    
    cr = nr;
    cc = nc;
    k++;
}

console.log(`${cc + 1} ${R - cr}`);