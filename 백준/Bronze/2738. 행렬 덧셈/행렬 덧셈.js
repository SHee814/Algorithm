const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [N, M] = input[0];
const A = input.slice(1, 1 + N);
const B = input.slice(1 + N);
let answer = '';

for (let i = 0; i < N; i++) {
    let row = '';
    
    for (let j = 0; j < M; j++) {
        row += `${A[i][j] + B[i][j]} `;
    }
    
    answer += `${row.trim()}\n`;
}

console.log(answer);