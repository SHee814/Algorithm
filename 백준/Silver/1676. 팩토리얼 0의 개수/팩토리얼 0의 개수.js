const N = +require('fs').readFileSync(0, 'utf-8').toString();
let c2 = 0;
let c5 = 0;

for (let n = 2; n <= N; n++) {
    let num = n;
    
    while (num % 2 === 0) {
        c2++;
        num /= 2;
    }
    
    while (num % 5 === 0) {
        c5++;
        num /= 5;
    }
}

console.log(Math.min(c2, c5));