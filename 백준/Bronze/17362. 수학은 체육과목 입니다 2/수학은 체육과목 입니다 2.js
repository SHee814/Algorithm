const N = +require('fs').readFileSync(0, 'utf-8');
const R = [2, 1, 2, 3, 4, 5, 4, 3];
console.log(R[N % 8]);