const S = require('fs').readFileSync(0, 'utf-8').toString().trim();
const suffixSet = new Set();

for (let i = 0; i < S.length; i++) {
    suffixSet.add(S.slice(i));
}

console.log(Array.from(suffixSet).sort().join('\n'));