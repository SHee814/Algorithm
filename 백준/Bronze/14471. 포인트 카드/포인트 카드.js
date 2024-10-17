const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [N, M] = input[0];
const stamp = input.slice(1).map(card => card[0] >= N ? 0 : N - card[0]).sort((a, b) => a - b);
const answer = stamp.slice(0, M - 1).reduce((acc, x) => acc + x, 0);

console.log(answer);