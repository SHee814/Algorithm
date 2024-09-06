const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const abc = input.reduce((acc, d) => acc + d, 0) / 2;

if (input.find(x => x >= abc)) {
    console.log(-1);
} else {
    const [c, b, a] = input.map(d => (abc - d).toFixed(1));
    console.log(`1\n${a} ${b} ${c}`);
}