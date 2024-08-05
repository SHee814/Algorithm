const N = +require('fs').readFileSync(0, 'utf-8');
let num = N;
let count = 0;

do {
    num = (num % 10) * 10 + ((Math.floor(num / 10) + num % 10) % 10);
    count++;
} while (N !== num);

console.log(count);