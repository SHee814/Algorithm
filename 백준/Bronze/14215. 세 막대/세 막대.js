const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const [a, b, c] = input.sort((a, b) => a - b);

if (a + b <= c) {
    console.log((a + b) * 2 - 1);
} else {
    console.log(a + b + c);
}
