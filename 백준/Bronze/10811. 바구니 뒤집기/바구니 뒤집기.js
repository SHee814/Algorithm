const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const steps = input.slice(1);
const baskets = Array.from(new Array(N), (_, i) => i + 1);

for (let step of steps) {
    const [i, j] = step.split(' ').map(x => +x - 1);
    
    baskets.splice(i, j - i + 1, ...baskets.slice(i, j + 1).reverse());
}

console.log(baskets.join(' '));