const N = require('fs').readFileSync(0, 'utf-8').toString().trim();
const count = new Map();
let related = true;

for (let n of N) {
    if (n !== '2' && n !== '0' && n !== '1' && n !== '8') {
        related = false;    
    }
    
    count.set(n, (count.get(n) || 0) + 1);
}

if (!related) {
    console.log(0);
} else if (!count.has('2') || !count.has('0') || !count.has('1') || !count.has('8')) {
    console.log(1);
} else if (
    count.get('2') !== count.get('0')
    || count.get('0') !== count.get('1')
    || count.get('1') !== count.get('8')
) {
    console.log(2);
} else {
    console.log(8);
}