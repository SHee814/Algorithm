const [A, B] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const primeNumbers = Array.from(new Array(B + 1), (_, i) => i >= 2);
let answer = 0;

function factorize(x) {
    let factors = 0;
    let d = 2;
    
    while (d <= x && x > 1) {
        if (x % d === 0) {
            x /= d;
            factors++;
        } else {
            do {
                d++;
            } while (d < x && !primeNumbers[d]);
        }
    }
    
    return factors;
}

for (let i = 2; i <= B; i++) {
    if (primeNumbers[i] === false) continue;
    
    for (let j = 2; i * j <= B; j++) {
        primeNumbers[i * j] = false;
    }
}

for (let n = A; n <= B; n++) {
    const fi = factorize(n);
    
    if (primeNumbers[fi]) {
        answer++;
    }
}

console.log(answer);