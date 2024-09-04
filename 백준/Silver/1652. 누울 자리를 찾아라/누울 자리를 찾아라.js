const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const room = input.slice(1).map(row => row.split(''));
let horizontal = 0;
let vertical = 0;

for (let i = 0; i < N; i++) {
    let width = 0;
    let height = 0;
    
    for (let j = 0; j < N; j++) {
        if (room[i][j] === 'X') {
            horizontal += (width >= 2) ? 1 : 0;
            width = 0;
        } else {
            width++;   
        }
        
        if (room[j][i] === 'X') {
            vertical += (height >= 2) ? 1 : 0;
            height = 0;
        } else {
            height++;
        }
    }
    
    if (width >= 2) {
        horizontal++;
    }
    
    if (height >= 2) {
        vertical++;
    }
}

console.log(`${horizontal} ${vertical}`);