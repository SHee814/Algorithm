const [xA, xB] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ');
const X = new Map();
const result = [];

for (let ia = 2; ia <= 36; ia++) {
    const a = parseInt(xA, ia);
                     
    if (!isNaN(a)) X.set(BigInt(a), ia);
}

for (let ib = 2; ib <= 36; ib++) {
    if (result.length > 2) break;
    
    const b = parseInt(xB, ib);
    
    if (isNaN(b)) {
        continue;
    }
    
    const bb = BigInt(b);
    const ia = X.get(bb);
    
    if (X.has(bb) && ia !== ib) {
        result.push([b, ia, ib]);
    }
}

if (result.length === 0) {
    console.log('Impossible');
} else if (result.length >= 2) {
    console.log('Multiple');
} else {
    console.log(result[0].join(' '));
}