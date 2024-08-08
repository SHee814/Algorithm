const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const R = +input[0];
const player = input[1].split('');
const N = +input[2];
const friends = input.slice(3).map(f => f.split(''));
let idealScore = 0;
let score = 0;

function RSP(p, f) {
    if (p === f) return 1;
    if (p === 'S' && f === 'P') return 2;
    if (p === 'P' && f === 'R') return 2;
    if (p === 'R' && f === 'S') return 2;
    
    return 0;
}

for (let r = 0; r < R; r++) {
    const p = player[r];
    const roundResult = [0, 0, 0]
    
    for (let i = 0; i < N; i++) {
        const f = friends[i][r];
        score += RSP(p, f);
        roundResult[0] += RSP('S', f);
        roundResult[1] += RSP('P', f);
        roundResult[2] += RSP('R', f);
    }
    
    idealScore += Math.max(...roundResult);
}

console.log(score + '\n' + idealScore);