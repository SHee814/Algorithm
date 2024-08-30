const [N, T] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const max = 2 * N;
let t = T;
let dir = 1;
let hands = 0;

while (t > 0) {
    hands += dir;
    t--;
    
    if (hands === 1 && dir < 0) {
        dir *= -1;
    }

    if (hands === max) {
        dir *= -1;
    }
}

console.log(hands);