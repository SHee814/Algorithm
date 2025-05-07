const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ');
const [rA, rB] = input.map(x => +x.split('').reverse().join(''));

console.log(Math.max(rA, rB));
