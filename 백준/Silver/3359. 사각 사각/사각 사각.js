const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const [i1, i2] = input[1].split(' ').map(Number);
const H = [[i1, i2]];
const R = [[i2, i1]];

for (let i = 1; i < N; i++) {
    const [s1, s2] = input[i + 1].split(' ').map(Number);
    const [w1, h1, w2, h2] = [s1, s2, s2, s1];
    const bR = R[i - 1];
    const bH = H[i - 1];
    const dR = [
        Math.max(bR[0] + Math.abs(bH[0] - h1) + w1, bR[1] + Math.abs(bH[1] - h1) + w1),
        Math.max(bR[0] + Math.abs(bH[0] - h2) + w2, bR[1] + Math.abs(bH[1] - h2) + w2)
    ];
    
    R.push(dR);
    H.push([h1, h2]);
}

console.log(Math.max(...R[N - 1]));