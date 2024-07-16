const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const M = +input[1];
const S = input[2];
const P = Array.from(new Array(2 * N + 1), (_, i) => i % 2 ? 'O' : 'I').join('');
let start = 0;
let count = 0;

while (start < M) {
    const x = S.indexOf(P, start);
    
    if (x >= 0) {
        count++;
        start = x + 1;
    } else {
        break;
    }
}

console.log(count);