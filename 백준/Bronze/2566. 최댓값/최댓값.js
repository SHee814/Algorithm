const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
let max = 0;
let row, col;

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        const val = input[i][j];
        
        if (val >= max) {
            max = val;
            [row, col] = [i + 1, j + 1];
        }
    }
}

console.log(`${max}\n${row} ${col}`);