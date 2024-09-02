const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const bot = input.slice(1).map(x => x.split(' ').map(Number));
let t = 0;

for (let i = 0; i < N; i++) {
    const [A, B] = bot[i];
    const dt = t % (A + B);
    if (dt < B) {
        t += (B - dt);
    }
    
    t++;
}

console.log(t);