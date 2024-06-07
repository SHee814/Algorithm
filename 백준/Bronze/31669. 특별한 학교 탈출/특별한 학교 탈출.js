const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const schedules = input.slice(1);

for (let m = 0; m < M; m++) {
    let canEscape = true;
    
    for (let n = 0; n < N; n++) {
        if (schedules[n][m] === 'O') canEscape = false;    
    }
    
    if (canEscape) {
        console.log(m + 1);
        process.exit();
    }
}

console.log('ESCAPE FAILED');