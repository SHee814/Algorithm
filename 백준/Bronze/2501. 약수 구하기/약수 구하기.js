const [N, K] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
let count = 0;

for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
        count++;
    }
    
    if (count === K) {
        console.log(i);
        break;
    }
}

if (count < K) console.log(0);