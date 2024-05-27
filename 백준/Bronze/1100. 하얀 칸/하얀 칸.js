const board = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(''));
let count = 0;

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0 && board[i][j] === 'F') count++;
    }
}

console.log(count);