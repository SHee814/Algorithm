const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];

for (let t = 1; t <= T; t++) {
    const line = input[t].split(' ');
    const Ti = +line[0];
    let candidate;
    let diff = 0;
    
    for (let i = 1; i <= Ti; i++) {
        const ti = +line[i];
        
        if (diff === 0) {
            candidate = ti;
        }
        
        diff += (candidate === ti) ? 1 : -1;
    }
    
    let count = 0;
    
    for (let i = 1; i <= Ti; i++) {
        const ti = +line[i];
        
        if (candidate === ti) {
            count++;
        }
    }
    
    console.log((count > Ti / 2) ? candidate : 'SYJKGW');
}