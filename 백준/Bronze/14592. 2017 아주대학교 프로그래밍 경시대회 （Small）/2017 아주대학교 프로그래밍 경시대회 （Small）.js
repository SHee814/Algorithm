const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [N] = input[0];
let answer = 1;

for (let i = 2; i <= +N; i++) {
    const winner = input[answer];
    const player = input[i];

    if (player[0] > winner[0]) {
        answer = i;
        continue;
    }
    
    if (player[0] === winner[0] && player[1] < winner[1]) {
        answer = i;
        continue;
    }
    
    if (player[0] === winner[0] && player[1] === winner[1] && player[2] < winner[2]) {
        answer = i;
    }
}

console.log(answer);