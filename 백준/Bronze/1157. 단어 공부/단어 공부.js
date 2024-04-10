const str = require('fs').readFileSync(0, 'utf-8').toString().trim().toUpperCase();
const count = new Array(26).fill(0);
let most;
let max = 0;

for (let x of str) {
    const index = x.charCodeAt() - 65;
    const val = ++count[index];
    
    if (val > max) {
        max = val;
        most = x;
    } else if (val === max) {
        most = '?';
    }
}

console.log(most);