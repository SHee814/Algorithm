const [a, b] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

function rev(x) {
    return +x.toString().split('').reverse().join('');
}

console.log(rev(rev(a) + rev(b)));