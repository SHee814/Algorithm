const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const crossword = input.slice(1);
const checked = Array.from(new Array(N), () => Array.from(new Array(M), () => new Array(2).fill(false)));
const hints = new Set();

for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
        if (crossword[r][c] !== '.') continue;
        
        if (!checked[r][c][0]) {
            let horizontalLength = 1;
            let dc = c + 1;
            
            while (dc < M && crossword[r][dc] === '.') {
                horizontalLength++;
                dc++;
            }
            
            if (horizontalLength >= 3) {
                hints.add(`${r + 1} ${c + 1}`);

                for (let i = c; i < dc; i++) {
                    checked[r][i][0] = true;
                }
            }
        }
        
        if (!checked[r][c][1]) {
            let verticalLength = 1;
            let dr = r + 1;
            
            while (dr < N && crossword[dr][c] === '.') {
                verticalLength++;
                dr++;
            }
            
            if (verticalLength >= 3) {
                hints.add(`${r + 1} ${c + 1}`);
                
                for (let i = r; i < dr; i++) {
                    checked[i][c][1] = true;
                }
            }
        }
    }
}

console.log(`${hints.size}\n${Array.from(hints).join('\n')}`);