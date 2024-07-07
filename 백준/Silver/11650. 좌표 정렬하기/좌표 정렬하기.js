const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const nums = input.slice(1).map(x => x.split(' ').map(Number));
const result = nums.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
console.log(result.map(x => x.join(' ')).join('\n'));
