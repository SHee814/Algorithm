const S = require('fs').readFileSync(0, 'utf-8').toString().trim();
const count = new Array(26).fill(0);

for (let s of S) {
    const unicode = s.charCodeAt();
    
    count[unicode - 97]++;
}

console.log(count.join(' '));