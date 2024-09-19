const [N, K] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const removed = new Set();
let k = K;

for (let i = 2; i <= N; i++) {
    for (let j = 1; i * j <= N; j++) {
        if (removed.has(i * j)) continue;
        
        removed.add(i * j);
        k--;
        
        if (k === 0) {
            console.log(i * j);
            process.exit();
        }
    }
}