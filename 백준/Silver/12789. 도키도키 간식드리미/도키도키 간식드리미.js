const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const waiting = input[1].split(' ').map(Number).reverse();
const side = [];

for (let i = 1; i <= N; i++) {
    let w = waiting.pop();
    let s = side.pop();
    
    if (i === w) {
        if (s) side.push(s);
    } else if (i === s) {
        if (w) waiting.push(w);
    } else if (i !== w && i !== s) {
        if (s) side.push(s);
        
        while (i !== w && w !== undefined) {
            side.push(w);
            w = waiting.pop();
        }
    }
    
    if (waiting.length + side.length > N - i) break;
}

console.log((waiting.length > 0 || side.length > 0) ? 'Sad' : 'Nice');