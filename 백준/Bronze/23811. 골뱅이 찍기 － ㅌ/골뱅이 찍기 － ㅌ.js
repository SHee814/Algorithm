const n = +require('fs').readFileSync(0, 'utf-8').toString();
let result = '';

for (let i = 0; i < 5 * n; i++) {
    const repeat = parseInt(i / n) % 2 === 0 ? 5 * n : n;
    result += '@'.repeat(repeat) + '\n';
}

console.log(result);