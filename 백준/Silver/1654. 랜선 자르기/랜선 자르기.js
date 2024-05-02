const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const LAN = input.slice(1).map(Number).sort((a, b) => a - b);
let l = 1;
let r = LAN[N - 1];

function cut(x) {
    return LAN.reduce((acc, lan) => acc + parseInt(lan / x), 0);
}

while (l <= r) {
    const m = parseInt((l + r) / 2);
    const k = cut(m);
    
    if (k >= K && cut(m + 1) < K) {
        console.log(m);
        break;
    }
    
    if (k >= K) {
        l = m + 1;
    } else {
        r = m - 1;
    }
}