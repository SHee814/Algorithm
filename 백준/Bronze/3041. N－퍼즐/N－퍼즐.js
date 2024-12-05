const puzzle = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(row => row.split(''));
const solved = {
    A: [0, 0],
    B: [0, 1],
    C: [0, 2],
    D: [0, 3],
    E: [1, 0],
    F: [1, 1],
    G: [1, 2],
    H: [1, 3],
    I: [2, 0],
    J: [2, 1],
    K: [2, 2],
    L: [2, 3],
    M: [3, 0],
    N: [3, 1],
    O: [3, 2],
}

let answer = 0;

for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
        const x = puzzle[r][c];
        
        if (x === '.') continue;
        
        const [or, oc] = solved[x];
        
        answer += Math.abs(or - r) + Math.abs(oc - c);
    }
}

console.log(answer);