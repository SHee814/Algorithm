const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const Q = input.slice(1).map(q => q.split(' ').map(Number));
let arr = [];
let answer = '';

for (let [t, x] of Q) {
    if (t === 1) {
        arr.push(x);
        continue;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    const sumL = left.reduce((acc, x) => acc + x, 0);
    const sumR = right.reduce((acc, x) => acc + x, 0);
    
    if (sumL <= sumR) {
        arr = right;
        answer += sumL;
    } else {
        arr = left;
        answer += sumR;
    }
    
    answer += '\n';
}

answer += arr.join(' ');
console.log(answer);