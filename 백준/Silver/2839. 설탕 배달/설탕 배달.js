const N = +require('fs').readFileSync(0, 'utf-8');
let min = Infinity;

for (let x = 0; x <= Math.floor(N / 5); x++) {
    for (let y = 0; y <= Math.floor(N / 3); y++) {
        const count = 5 * x + y * 3;
        
        if (count === N && x + y < min) min = x + y;
    }
}

console.log(min === Infinity ? -1 : min);