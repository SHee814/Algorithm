const N = +require('fs').readFileSync(0, 'utf-8').toString();
let n = 2;

for (let i = 0; i < N; i++) {
    n = 2 * n - 1;
}

console.log(n ** 2);