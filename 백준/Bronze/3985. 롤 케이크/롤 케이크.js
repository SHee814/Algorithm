const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const L = +input[0];
const N = +input[1];
const cake = new Array(L).fill(0);
let expectedLength = 0;
let extpectedPlayer = 0;
let maxLength = 0;
let maxPlayer = 0;

for (let i = 1; i <= N; i++) {
    const [s, e] = input[i + 1].split(' ').map(Number);
    const order = e - s + 1;
    
    if (order > expectedLength) {
        expectedLength = order;
        expectedPlayer = i;
    }
    
    let count = 0;
    
    for (let j = s; j <= e; j++) {  
        if (cake[j] === 0) {
            cake[j] = i;
            count++;
        }
    }
    
    if (count > maxLength) {
        maxLength = count;
        maxPlayer = i;
    }
}

console.log(`${expectedPlayer}\n${maxPlayer}`);