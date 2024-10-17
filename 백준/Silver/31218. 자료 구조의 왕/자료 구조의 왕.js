const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [N, M, Q] = input[0];
const F = Array.from(new Array(N), () => new Array(M).fill(0));
let count = N * M;
let answer = '';

function operate(dy, dx, y, x) {
    let cy = y - 1;
    let cx = x - 1;
    
    while (cy >= 0 && cy < N && cx >= 0 && cx < M && F[cy][cx] === 0) {
        F[cy][cx] = 1;
        count--;
        
        cy += dy;
        cx += dx;
    }
}

function check(y, x) {
    return F[y - 1][x - 1];
}

for (let i = 1; i <= Q; i++) {
    const q = input[i];
    
    if (q[0] === 1) {
        operate(...q.slice(1));
    } else if (q[0] === 2) {
        answer += `${check(...q.slice(1))}\n`;
    } else {
        answer += `${count}\n`;
    }
}

console.log(answer);