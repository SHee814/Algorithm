const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M, B] = input[0].split(' ').map(Number);
const field = input.slice(1).map(row => row.split(' ').map(Number));
const blockUsed = field.reduce((accN, n) => accN + n.reduce((accM, y) => accM + y, 0), 0);
let minTime = Infinity;
let maxHeight = 0;

function expectTime(h) {
    if (N * M * h > blockUsed + B) {
        return Infinity;
    }
    
    let time = 0;
    
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < M; c++) {
            const diff = field[r][c] - h;
            
            if (diff > 0) {
                time += diff * 2;
            } else {
                time += -diff;
            }
        }
    }
    
    return time;
}

for (let h = 0; h <= 256; h++) {
    const et = expectTime(h);
    
    if (minTime >= et) {
        minTime = et;
        maxHeight = Math.max(h, maxHeight);
    }
}

console.log(`${minTime} ${maxHeight}`);