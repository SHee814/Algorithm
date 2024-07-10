const target = require('fs').readFileSync(0, 'utf-8').toString().trim();
let count = 1;

for (let i = 1; i < target.length; i++) {
    if (target[i - 1].charCodeAt() >= target[i].charCodeAt()) count++;
}

console.log(count);