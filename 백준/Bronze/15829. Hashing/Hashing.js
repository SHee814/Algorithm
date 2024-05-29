const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const str = input[1];
const mod = 1234567891n;
const value = str.split('').reduce((acc, x, i) => {
    const power = 31n ** BigInt(i);
    const charCode = BigInt(x.charCodeAt() - 96);
    return (acc + (charCode * power) % mod) % mod;
}, 0n);

console.log(value.toString());