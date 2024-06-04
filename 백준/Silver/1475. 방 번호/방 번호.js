const N = require('fs').readFileSync(0, 'utf-8').toString().trim();
const count = new Array(9).fill(0);

for (let n of N) {
    if (n === '9') {
        count[6]++;
    } else {
        count[+n]++;
    }
}

count[6] = Math.ceil(count[6] / 2);
console.log(Math.max(...count));