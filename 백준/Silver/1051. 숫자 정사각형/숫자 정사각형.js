const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(row => row.split('').map(Number));
const short = Math.min(N, M);
let size = short;

while (size > 0) {
    for (let n = 0; n <= N - size; n++) {
        for (let m = 0; m <= M - size; m++) {
            const a = board[n][m];
            const b = board[n + size - 1][m];
            const c = board[n][m + size - 1];
            const d = board[n + size - 1][m + size - 1];
                
            if (a !== b || b !== c || c !== d) continue;
            
            console.log(size ** 2);
            process.exit();
        }
    }
    
    size--;
}