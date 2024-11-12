let S = +require('fs').readFileSync(0, 'utf-8');
let n = 1;

while (n <= S) {
    S -= n++;
}

console.log(n - 1);