const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const passwordMap = new Map(input.slice(1, N + 1).map(x => x.split(' ')));
const targetList = input.slice(N + 1);
let answer = '';

for (let target of targetList) {
    answer += `${passwordMap.get(target)}\n`;
}

console.log(answer);