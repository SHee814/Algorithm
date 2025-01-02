const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, S, K] = input[0].split(' ').map(Number);
const range = [[1, S], ...input.slice(1).map(r => r.split(' ').map(Number)), [N+1, 0]];
let answer = 0;
for (let i = 0; i <= K; i++) {
    const [s, e] = [range[i][0], range[i + 1][0]];
    const bpm = range[i][1] / 60;
    
    answer += 4 * (e - s) / bpm;
}

console.log(answer.toFixed(12));