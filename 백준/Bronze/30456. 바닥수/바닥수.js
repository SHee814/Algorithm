const [N, L] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

if (N === 0) {
    console.log(10 ** (L - 1));
} else {
    console.log('1'.repeat(L - 1) + N);
}