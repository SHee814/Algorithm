const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [C, R] = input[0].split(' ').map(Number);
const rotated = input.slice(1, R + 1).map(row => row.split(' ').map(Number));
const origin = input.slice(R + 1).map(row => row.split(' ').map(Number));
let flag = true;

for (let r = 0; r < R; r++) {
    if (!flag) break;
    
    for (let c = 0; c < C; c++) {
        const dr = c;
        const dc = R - 1 - r;
        
        if (rotated[r][c] !== origin[dr][dc]) {
            flag = false;
            break;
        }
    }
}

const YES = `|>___/|        /}
| O < |       / }
(==0==)------/ }
| ^  _____    |
|_|_/     ||__|`;
const NO = `|>___/|     /}
| O O |    / }
( =0= )""""  \\
| ^  ____    |
|_|_/    ||__|`;

console.log((flag) ? YES : NO);