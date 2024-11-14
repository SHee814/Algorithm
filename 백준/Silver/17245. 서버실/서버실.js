const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const server = input.slice(1).map(row => row.split(' ').map(Number));
let sum = 0;
let max = 0;
let answer = '';

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        sum += server[i][j];
        max = Math.max(max, server[i][j]);
    }
}

function count(m) {
    let result = 0;
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            result += m >= server[i][j] ? server[i][j] : m;
        }
    }

    return result >= sum / 2;
}

let l = 0;
let h = max;

while (l + 1 < h) {
    const m = Math.floor((l + h) / 2);
    
    if (count(m)) {
        h = m;
    } else {
        l = m;
    }
}

if (count(l)) {
    console.log(l);
} else {
    console.log(h);
}