const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const [A, B] = [Math.max(...input), Math.min(...input)];
let [a, b] = [A, B];

while (b != 0) {
    [a, b] = [b, a % b];
}

const gcd = a;
const lcm = A * B / gcd;

console.log(`${gcd}\n${lcm}`);