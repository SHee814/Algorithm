const N = +require('fs').readFileSync('/dev/stdin');

console.log('long '.repeat(N / 4) + 'int');