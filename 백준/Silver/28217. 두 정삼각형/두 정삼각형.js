const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(x => x.split(' ').map(Number));
const [N] = input[0];
const A = input.slice(1, N + 1);
const B = input.slice(N + 1);

function rotate(origin) {
    const rotated = Array.from(new Array(N), () => []);
    
    for (let r = 0; r < N; r++) {
        for (let c = 0; c <= r; c++) {
            rotated[N - 1 - c].push(origin[r][c]);
        }
    }
    
    return rotated;
}

function reverse(origin) {
    const reversed = Array.from(new Array(N), () => []);
    
    for (let r = 0; r < N; r++) {
        const row = reversed[r];
        
        for (let c = r; c >= 0; c--) {
            row.push(origin[r][c]);
        }
    }
    
    return reversed;
}

function compare(P, Q) {
    let diff = 0;
    
    for (let r = 0; r < N; r++) {
        for (let c = 0; c <= r; c++) {
            if (P[r][c] !== Q[r][c]) {
                diff++;
            }
        }
    }
    
    return diff;
}

const variation = [A];
variation.push(rotate(A));
variation.push(rotate(variation[1]));
variation.push(reverse(A));
variation.push(rotate(variation[3]));
variation.push(rotate(variation[4]));

const minDiff = Math.min(...variation.map(V => compare(B, V)));
console.log(minDiff);

