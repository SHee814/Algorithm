const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = input[1];
const vowelSet = new Set(['A', 'E', 'I', 'O', 'U']);
let result = '';

for (let s of S) {
    const length = result.length;
    
    if (length < M - 3) {
        result += s;
    } else if (length < M - 1) {
        if (s === 'A') {
            result += s;
        }
    } else if (length === M - 1) {
        if (!vowelSet.has(s)) {
            result += s;
        }
    }
}

if (result.length === M) {
    console.log(`YES\n${result}`);
} else {
    console.log('NO');
}