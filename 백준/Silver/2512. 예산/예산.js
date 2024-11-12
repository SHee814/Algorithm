const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const requestedBudget = input[1].split(' ').map(Number);
const totalBudget = +input[2];
let left = 0;
let right = Math.max(...requestedBudget);

function distributeBudget(max) {
    let used = 0;
    
    for (let rb of requestedBudget) {
        used += rb < max ? rb : max;
    }
    
    return totalBudget >= used;
}

while (left <= right) {
    const max = Math.floor((left + right) / 2);
    
    if (distributeBudget(max)) {
        left = max + 1;
    } else {
        right = max - 1;
    }
}

console.log(Math.floor((left + right) / 2));