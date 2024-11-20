const N = +require('fs').readFileSync(0, 'utf-8');
const arr = Array.from(new Array(N), (_, i) => N - i);
console.log(arr.join(' '));