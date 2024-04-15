const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const stranger = new Set();
const answer = [];

for (let i = 1; i <= N; i++) {
    stranger.add(input[i]);
}

for (let j = N + 1; j < input.length; j++) {
    if (stranger.has(input[j])) {
        answer.push(input[j]);
    }
}

console.log(`${answer.length}\n${answer.sort().join('\n')}`);