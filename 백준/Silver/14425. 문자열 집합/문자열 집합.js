const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const strSet = new Set(input.slice(1, N + 1));
const strList = input.slice(N + 1);
let count = 0;

for (let str of strList) {
    if (strSet.has(str)) count++;
}

console.log(count);