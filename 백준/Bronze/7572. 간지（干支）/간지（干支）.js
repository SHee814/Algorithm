const N = +require('fs').readFileSync(0, 'utf-8');
const ref = N < 4 ? N + 60 - 4 : N - 4;
const signs = 'ABCDEFGHIJKL';
console.log(signs[ref % 12] + ref % 10);