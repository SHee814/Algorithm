const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const S = input[1];
const count = new Map();
const n = Math.floor(N / 2);

for (let i = 0; i < n; i++) {
    const s = S[i];
    
    count.set(s, (count.get(s) || 0) + 1);
}

for (let i = N - 1; i >= N - n; i--) {
    const s = S[i];
    
    count.set(s, (count.get(s) || 0) + 1);
}

const isAnnagram = !Array.from(count.values()).some(x => x % 2 === 1);

console.log(isAnnagram ? 'Yes' : 'No');