const S = require('fs').readFileSync(0, 'utf-8').toString().trim();
const target = 'UCPC';
let ti = 0;
let si = 0;

while (si < S.length) {
    if (S[si] === target[ti]) {
        ti++;
    }
    
    si++;
    
    if (ti === 4) {
        console.log('I love UCPC');
        process.exit();
    }
}

console.log('I hate UCPC');