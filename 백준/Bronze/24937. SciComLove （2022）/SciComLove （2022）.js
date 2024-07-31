const N = +require('fs').readFileSync(0, 'utf-8');
const str = 'SciComLove';
const n = N % (str.length);
const answer = str.slice(n) + str.slice(0, n);
console.log(answer);