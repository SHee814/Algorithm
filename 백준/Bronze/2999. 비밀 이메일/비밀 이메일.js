const code = require('fs').readFileSync(0, 'utf-8').toString().trim().split('');
const N = code.length;
let R = parseInt(Math.sqrt(N));
let C = N / R;

while (parseInt(C) !== C) {
    R -= 1;
    C = N / R;
}

let decoded = '';
let row = 0;
let idx = 0;

while (row < R) {
    decoded += code[idx];
    code[idx] = null;
    idx += R;
    
    if (idx >= N) {
        idx = ++row;
    }
}

console.log(decoded);