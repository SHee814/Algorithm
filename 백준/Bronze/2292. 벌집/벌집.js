const N = +require('fs').readFileSync(0, 'utf-8').toString();
let n = 1;
let level = 1;

while (n < N) {
    n += level * 6;
    level++;
}
    

console.log(level);