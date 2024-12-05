const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const nums = input[1].split(' ').map(Number);
const count = new Map();
let max = 0;

for (let n of nums) {
    count.set(n, (count.get(n) || 0) + 1);
    max = Math.max(n, max);
}

const memo = [];

for (let i = 1; i <= max; i++) {
    if (i === 1) {
        memo.push(count.get(i) || 0);
        continue;
    }
    
    memo.push(memo[i - 2] * (count.get(i) || 0));
}

const answer = memo.reduce((acc, x) => acc + x, 0);

console.log(answer);