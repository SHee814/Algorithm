const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, C] = input[0].split(' ').map(Number);
const P = input.slice(1).map(Number);
let answer = 0;

for (let i = 1; i <= C; i++) {
    let flag = false;
    
    for (let j = 0; j < N; j++) {
        if (i % P[j] === 0) {
            answer++;
            flag = true;
            break;
        }
    }
}

console.log(answer);