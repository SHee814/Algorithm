const str = require('fs').readFileSync(0, 'utf-8').toString().trim();
const answer = str.split('').map(x => {
    if (x.toUpperCase() === x) return x.toLowerCase();
    
    return x.toUpperCase();
}).join('');

console.log(answer);