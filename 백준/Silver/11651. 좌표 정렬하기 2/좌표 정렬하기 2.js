const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(t => t.split(' ').map(Number));
const [N] = input[0];
const nums_sorted = input.slice(1).sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
console.log(nums_sorted.map(t => t.join(' ')).join('\n'));