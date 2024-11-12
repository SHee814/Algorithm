const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const nums = input[1].split(' ').map(Number);
const sequence = [];

for (let i = 0; i < N; i++) {
    const n = nums[i];
    let l = 0;
    let r = sequence.length;
    
    while (l < r) {
        const m = Math.floor((l + r) / 2);
        
        if (sequence[m] < n) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    
    sequence[l] = n;
}

console.log(sequence.length);