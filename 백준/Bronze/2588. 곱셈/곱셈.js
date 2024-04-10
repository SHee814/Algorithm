const fs = require('fs');
const [x, y] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b, c, d] = [+y[2] * +x, +y[1] * +x, +y[0] * +x, +x * +y];

console.log(`${a}\n${b}\n${c}\n${d}`);