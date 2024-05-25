const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const T = input[0][0];
let answer = '';

for (let t = 1; t <= T; t++) {
    const [H, W, N] = input[t];
    const floor = N % H || H;
    const room = Math.ceil(N / H);
    
    answer += `${floor}${room.toString().padStart(2, '0')}\n`;
}

console.log(answer);