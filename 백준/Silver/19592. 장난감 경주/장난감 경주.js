const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
const cases = input.slice(1).map(row => row.split(' ').map(Number));
let answer = '';

for (let t = 0; t < T; t++) {
    const [N, X, Y] = cases[2 * t];
    const V = cases[2 * t + 1];
    const maxV = Math.max(...V.slice(0, V.length - 1));
    const minT = X / maxV;
    let timeN = X / V[N - 1];
    let boost = 0;
    
    while (timeN >= minT && boost < Y) {
        boost++;
        timeN = ((X - boost) / V[N - 1]) + 1;
    }
    
    if (timeN >= minT) {
        answer += -1 + '\n';
    } else {
        answer += boost + '\n';
    }
}

console.log(answer);