const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const steps = input.slice(1);
const baskets = Array.from(new Array(N), (_, i) => i + 1);

for (let step of steps) {
    const [i, j] = step.split(' ').map(Number);
    
    [baskets[i - 1], baskets[j - 1]] = [baskets[j - 1], baskets[i - 1]];
}

const answer = baskets.join(' ');

console.log(answer);