const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const steps = input.slice(1);
const baskets = new Array(N).fill(0);

for (let step of steps) {
    const [i, j, k] = step.split(' ').map(Number);
    
    for (let b = i - 1; b < j; b++) {
        baskets[b] = k;
    }
}

const answer = baskets.join(' ');

console.log(answer);