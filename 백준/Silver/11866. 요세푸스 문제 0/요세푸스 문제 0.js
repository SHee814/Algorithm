const [N, K] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const circle = Array.from(Array(N), (_, i) => i + 1);
const p = [];
let count = 1;
let idx = 0;

while (p.length < N) {
    if (circle[idx] === 0) {
        idx = idx + 1 < N ? idx + 1 : 0;
        continue;
    }
    
    if (count === K) {
        count = 1;
        p.push(circle[idx]);
        circle[idx] = 0;
    } else {
        count++;
    }
    
    idx = idx + 1 < N ? idx + 1 : 0;
}

console.log(`<${p.join(', ')}>`);