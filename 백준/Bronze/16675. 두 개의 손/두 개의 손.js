const [m1, m2, t1, t2] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ');

function RSP(x, y) {
    if (x === 'R' && y === 'S') {
        return 1;
    } else if (x === 'S' && y === 'P') {
        return 1;
    } else if (x === 'P' && y === 'R') {
        return 1;
    } else {
        return 0;
    }
}

const ms = [m1, m2];
const tk = [t1, t2];

for (let i = 0; i < 2; i++) {
    let score_ms = 0;
    let score_tk = 0;
    
    for (let j = 0; j < 2; j++) {
        score_ms += RSP(ms[i], tk[j]);
        score_tk += RSP(tk[i], ms[j]);
    }
    
    if (score_ms >= 2) {
        console.log('MS');
        process.exit();
    }
    
    if (score_tk >= 2) {
        console.log('TK');
        process.exit();
    }
}

console.log('?');