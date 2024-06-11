const N = +require('fs').readFileSync(0, 'utf-8').toString().trim();
const board = Array.from(new Array(N), () => new Array(N).fill(' '));

function star(r, c, n) {
    if (n === 1) {
        board[r][c] = '*';
        return;
    }
    
    const nn = n / 3;
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i * j === 1) continue;
            
            star(r + i * nn, c + j * nn, nn);
        }
    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i * j === 1) continue;
        
        let n = N / 3;
        star(i * n, j * n, n);
    }
}

console.log(board.map(row => row.join('')).join('\n'));