const N = +require('fs').readFileSync(0, 'utf-8');
console.log(Array.from(new Array(N), (_, i) => ' '.repeat(N - i - 1) + '*'.repeat(2 * i + 1)).join('\n'));