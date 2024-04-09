const fs = require('fs');
const [H, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let [nH, nM] = [H, M];

if (M < 45 && H > 0) {
    nM += 15;
    nH -= 1;
} else if (M < 45) {
    nM += 15;
    nH = 23;
} else {
    nM = M - 45;
}

console.log(`${nH} ${nM}`);