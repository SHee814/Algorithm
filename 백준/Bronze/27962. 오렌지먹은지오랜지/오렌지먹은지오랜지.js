const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const S = input[1];

function isVitamin(s1, s2) {
    let diff = 0;
    
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) diff++;
        
        if (diff > 1) return false;
    }
    
    return diff === 1;
}

for (let i = 0; i < N; i++) {
    const s1 = S.slice(0, i + 1);
    const s2 = S.slice(N - 1 - i);
    
    if (isVitamin(s1, s2)) {
        console.log('YES');
        process.exit();
    }
}

console.log('NO');