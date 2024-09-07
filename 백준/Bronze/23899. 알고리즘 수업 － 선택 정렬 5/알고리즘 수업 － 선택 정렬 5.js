const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const N = [+input[0]];
const A = input[1];
const B = input[2];

function isSame(a, b) {
    for (let i = 0; i < N; i++) {
        if (a[i] !== b[i]) return false;
    }
    
    return true;
}

if (isSame(A, B)) {
    console.log(1);
    process.exit();
}

for (let last = N - 1; last >= 1; last--) {
    let max = A[last];
    let idx = last;
    
    for (let i = 0; i <= last; i++) {
        if (A[i] > max) {
            max = A[i];
            idx = i;
        }
    }
    
    if (idx != last) {
        [A[idx], A[last]] = [A[last], A[idx]];
    }
    
    if (isSame(A, B)) {
        console.log(1);
        process.exit();
    }
}

console.log(0);