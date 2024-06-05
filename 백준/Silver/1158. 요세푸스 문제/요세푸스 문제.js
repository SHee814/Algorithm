const [N, K] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const seq = Array.from(new Array(N), (_, i) => i + 1);
const result = [];
let move = K;
let index = -1;

while (result.length < N) {
    if (move > 0) {
        index = (index + 1) % seq.length;
        
        while (seq[index] === 0) {
            index = (index + 1) % seq.length;
        }
        
        move--;
        continue;
    }
    
    move = K;
    result.push(seq[index]);
    seq[index] = 0;
}

console.log(`<${result.join(', ')}>`);