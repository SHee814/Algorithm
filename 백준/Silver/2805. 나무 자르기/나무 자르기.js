const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number).sort((a, b) => a - b);

function cut(h) {
    return trees.reduce((acc, t) => acc + Math.max(t - h, 0), 0);
}

let l = 0;
let r = trees[N - 1];

while (l <= r) {
    const h = parseInt((l + r) / 2);
    const m = cut(h);
    
    if (m >= M && cut(h + 1) < M) {
        console.log(h);
        break;
    }
    
    if (m >= M) {
        l = h + 1;
    } else {
        r = h - 1;
    }
}