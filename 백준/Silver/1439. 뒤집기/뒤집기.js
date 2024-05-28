const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
let count = 0;

for (let i = 0; i < input.length - 1; i++) {
    if (input[i] !== input[i + 1]) count++;
}

console.log(Math.ceil(count / 2));