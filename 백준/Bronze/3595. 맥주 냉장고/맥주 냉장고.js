const N = +require('fs').readFileSync(0, 'utf-8').toString();
let min = Infinity;
let answer = '';

for (let i = Math.ceil(Math.cbrt(N)); i >= 1; i--) {
    if (N % i > 0) continue;
    
    for (let j = N / i; j >= 1; j--) {
        if ((N / i) % j > 0) continue;
        
        const k = N / i / j;
        
        const surfaceArea = 2 * ((i * j) + (j * k) + (k * i));
        
        if (surfaceArea < min) {
            min = surfaceArea;
            answer = `${i} ${j} ${k}`;
        }
    }
}

console.log(answer);