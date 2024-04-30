const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const A = input[1].split(' ').map(Number).sort((a, b) => a - b);
const M = +input[1];
const nums = input[3].split(' ').map(Number);

function binarySearch(x) {
    let l = 0;
    let r = N - 1;
    
    while (l <= r) {
        if (A[l] === x || A[r] === x) return 1;
        
        const m = parseInt((l + r) / 2);
        
        if (A[m] === x) return 1;
        if (A[m] < x) l = m + 1;
        if (A[m] > x) r = m - 1;
    }
    
    return 0;
}

let answer = '';

for (let n of nums) {
    answer += `${binarySearch(n)}\n`;
}

console.log(answer);