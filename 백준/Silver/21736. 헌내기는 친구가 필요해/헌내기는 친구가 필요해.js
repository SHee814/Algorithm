const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);
const room = input.slice(1).map(row => row.split(''));
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
let ir, ic;
let count = 0;

for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
        if (room[r][c] === 'I') {
            [ir, ic] = [r, c];
        }
    }
}

move(ir, ic);
console.log(count || 'TT');

function move(r, c) {
    for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];
        
        if (nr < 0 || nr >= R) continue;
        if (nc < 0 || nc >= C) continue;
        if (room[nr][nc] === 'X' || room[nr][nc] === 'I') continue;
        
        if (room[nr][nc] === 'P') count++;

        room[nr][nc] = 'X';
        move(nr, nc);
    }    
}