const fs = require('fs');
const [N, K] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
let left = 1;
let right = N ** 2;

function count(x) {
    let cnt = 0;
    
    for (let n = 1; n <= N; n++) {
        cnt += Math.min(parseInt(x / n), N);
    }
    
    return cnt;
}

while (left < right) {
    const mid = parseInt((left + right) / 2);
    const k = count(mid);
    
    if (k < K) {
        left = mid + 1;
    } else {
        right = mid;
    }
}

console.log(parseInt((left + right) / 2));