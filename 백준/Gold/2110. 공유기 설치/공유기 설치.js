const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, C] = input[0].split(' ').map(Number);
const pos = input.slice(1).map(Number).sort((a, b) => a - b);

function checkValidDist(d) {
    let c = 1;
    let cx = 0;
    let nx = cx + 1;
    
    while (c < C && nx < N) {
        if (pos[nx] - pos[cx] >= d) {
            c++;
            cx = nx;
            nx++;
        } else {
            nx++;
        }
    }
    
    return c === C;
}

let l = 1;
let r = pos[N - 1];

while (l <= r) {
    const d = parseInt((l + r) / 2);
    const v = checkValidDist(d);
    
    if (v && !checkValidDist(d + 1)) {
        console.log(d);
        break;
    }
    
    if (v) {
        l = d + 1;
    } else {
        r = d - 1;
    }
}