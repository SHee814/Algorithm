const N = +require('fs').readFileSync(0, 'utf-8');
let sum = 0;
let sum_cube = 0;

for (let i = 1; i <= N; i++) {
    sum += i;
    sum_cube += i ** 3;
}

console.log(`${sum}\n${sum ** 2}\n${sum_cube}`);