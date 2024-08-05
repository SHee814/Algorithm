const N = +require('fs').readFileSync(0, 'utf-8');
console.log(Array.from(new Array(N), (_, i) => N - i).join('\n'));