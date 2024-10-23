const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
let answer = '';

for (let i = 1; i <= 2 * N; i += 2) {
    const cntA = [0, 0, 0, 0];
    const cntB = [0, 0, 0, 0];
    const A = input[i].split(' ').map(Number).slice(1);
    const B = input[i + 1].split(' ').map(Number).slice(1);
    
    for (let a of A) {
        cntA[a - 1]++;
    }
    
    for (let b of B) {
        cntB[b - 1]++;
    }
    
    if (cntA[3] !== cntB[3]) {
        answer += `${cntA[3] > cntB[3] ? 'A' : 'B'}\n`;
        continue;
    } else if (cntA[2] !== cntB[2]) {
        answer += `${cntA[2] > cntB[2] ? 'A' : 'B'}\n`;
        continue;
    } else if (cntA[1] !== cntB[1]) {
        answer += `${cntA[1] > cntB[1] ? 'A' : 'B'}\n`;
        continue;
    } else if (cntA[0] !== cntB[0]) {
        answer += `${cntA[0] > cntB[0] ? 'A' : 'B'}\n`;
        continue;
    } else {
        answer += 'D\n';
    }
}

console.log(answer);