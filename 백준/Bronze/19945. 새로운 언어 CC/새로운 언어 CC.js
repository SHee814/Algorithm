const N = +require('fs').readFileSync(0, 'utf-8');

if (N === 0) {
    console.log(1);
    process.exit();
}

let n = Math.abs(N);
const binaryPos = [];

while (n >= 2) {
    binaryPos.push(n % 2);
    n = Math.floor(n / 2);
}

binaryPos.push(n);
binaryPos.reverse();

if (N >= 0) {
    console.log(binaryPos.length - binaryPos.indexOf(1));
    process.exit();
}

const binaryNeg = new Array(32 - binaryPos.length).fill(0).concat(binaryPos);

for (let i = 0; i < 32; i++) {
    binaryNeg[i] = binaryNeg[i] === 1 ? 0 : 1;
}

let add = 1;

for (let i = 31; i >= 0; i--) {
    if (binaryNeg[i] + add > 1) {
        add = 1;
        binaryNeg[i] = 0;
    } else {
        binaryNeg[i] += add;
        add = 0;
    }
}

console.log(32 - binaryNeg.indexOf(1));