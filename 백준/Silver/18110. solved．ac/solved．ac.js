const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = input[0];

if (N === 0) {
    console.log(0);
    process.exit();
}

const votes = input.slice(1).sort((a, b) => a - b);
const cutline = Math.round(N * 0.15);
const validVotes = votes.slice(cutline, N - cutline);
const sum = validVotes.reduce((acc, x) => acc + x, 0);
const average = Math.round(sum / validVotes.length);
console.log(average);