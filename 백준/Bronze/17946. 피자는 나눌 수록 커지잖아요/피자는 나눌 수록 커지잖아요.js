const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
console.log(new Array(input[0]).fill(1).join('\n'));