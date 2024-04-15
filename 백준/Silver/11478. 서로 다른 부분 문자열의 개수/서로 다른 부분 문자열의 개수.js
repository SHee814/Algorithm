const str = require('fs').readFileSync(0, 'utf-8').toString().trim();
const strSet = new Set();
let count = 0;

for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
        const subStr = str.slice(i, j + 1);
        
        if (!strSet.has(subStr)) {
            strSet.add(subStr, true);
            count++;
        }
    }
}

console.log(count);