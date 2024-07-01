const fs = require('fs');
const [N, M] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const palace = Array.from(new Array(M), () => new Array(N).fill(false));
const dr = [0, -1, 0, 1];
const dc = [1, 0, -1, 0];
let [r, c] = [M - 1, 0];
let dir = 0;

palace[r][c] = true;

while (true) {
    let nr = r + dr[dir];
    let nc = c + dc[dir];
    let rotate = 0;
    
    while (nr < 0 || nr >= M || nc < 0 || nc >= N || palace[nr][nc]) {
        dir = (dir + 1) % 4;
        rotate++;
        
        if (rotate === 4) {
            console.log(`${c} ${M - 1 - r}`);
            process.exit();
        }
        
        nr = r + dr[dir];
        nc = c + dc[dir];
    }
    
    r = nr;
    c = nc;
    palace[r][c] = true;
}