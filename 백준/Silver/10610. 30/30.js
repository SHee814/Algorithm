const N = require('fs').readFileSync(0, 'utf-8').toString().trim().split('');
const sum = N.reduce((acc, x) => acc + +x, 0);
let includeZero = N.indexOf('0') >= 0;

console.log(includeZero && sum % 3 === 0 ? N.sort((a, b) => +b - +a).join('') : -1);