const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const str = input[1];
const key = str.split('').reduce((acc, x, i) => {
    return acc + (x.charCodeAt() - 96) * (31 ** i);
}, 0);
const value = key % 1234567891;

console.log(value);