const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let caseIndex = 1;
let answer = '';

function sortString(X, Y) {
    let ix = 0;
    let iy = 0;
    
    while (ix < X.length && iy < Y.length) {
        const x = X[ix];
        const y = Y[iy];
        
        if (x === y) {
            ix++;
            iy++;
            continue;
        }
        
        if (x === '-') {
            return 1;
        }
        
        if (y === '-') {
            return -1;
        }
        
        const ux = x.toUpperCase();
        const uy = y.toUpperCase();
        
        if (ux !== uy) {
            return ux.charCodeAt() - uy.charCodeAt();
        }
        
        if (x === ux) {
            return -1;
        }
        
        if (y === uy) {
            return 1;
        }
    }
    
    if (X[ix] === undefined) {
        return -1;
    }
    
    return 1;
}

while (caseIndex < input.length) {
    const n = +input[caseIndex++];
    const nextIndex = caseIndex + n;

    const strings = input.slice(caseIndex, nextIndex).sort((a, b) => sortString(a, b));
    
    answer += strings.join('\n') + '\n';
    caseIndex = nextIndex;
}

console.log(answer);