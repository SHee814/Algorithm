const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(line => line.split(' ').map(Number));
const [N, M] = input[0];
const office = input.slice(1);
const cctv = [];
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
let answer = Infinity;

for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
        if (office[r][c] > 0 && office[r][c] < 6) cctv.push([r, c]);
    }
}

for (let i = 0; i < 4; i++) {
    const newState = office.map(row => row.slice());
    monitor(newState, i, 0);
}

console.log(answer);

// Check all possilbe direction of cctv recursively.
function monitor(state, vector, index) {
    if (index === cctv.length) {
        answer = Math.min(countBlindSite(state), answer);
        return;
    }

    const [cr, cc] = cctv[index];
    checkDirection(state, vector, office[cr][cc], cr, cc);

    for (let i = 0; i < 4; i++) {
        const newState = state.map(row => row.slice());
        monitor(newState, i, index + 1);
    }
}

// Determine all direction of cctv based on vector_ref.
function checkDirection(state, vector_ref, type, r, c) {
    const allVectors = [0, 1, 2, 3].map(x => (x + vector_ref) % 4);
    let validVectors;

    if (type > 2) {
        validVectors = allVectors.slice(0, type - 1);
    } else {
        validVectors = [allVectors[0], allVectors[2]].slice(0, type);
    }

    for (let v of validVectors) {
        checkVisibleSite(state, r, c, v);
    }
}

// Check all visible position of current direction of cctv.
function checkVisibleSite(state, r, c, v) {
    let cr = r + dr[v];
    let cc = c + dc[v];

    while (cr >= 0 && cr < N && cc >= 0 && cc < M) {
        const position = state[cr][cc];
        
        if (position <= 0) state[cr][cc] = -1;
        else if (position === 6) break;
        
        cr += dr[v];
        cc += dc[v];
    }
}

function countBlindSite(state) {
    let count = 0;
    
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < M; c++) {
            if (state[r][c] === 0) count++;
        }
    }

    return count;
}