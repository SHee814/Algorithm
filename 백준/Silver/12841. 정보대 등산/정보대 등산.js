const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(x => x.split(' ').map(Number));
const [n] = input[0];
const crosses = input[1];
const left = input[2];
const right = input[3];
let remainLeft = left.reduce((acc, x) => acc + x, 0);
let remainRight = right.reduce((acc, x) => acc + x, 0);
let minDist = Infinity;
let passedDist = 0;
let crossingPoint = 0;

for (let i = 0; i < n; i++) {
    const cross = crosses[i];

    if (minDist > passedDist + cross + remainRight) {
        minDist = passedDist + cross + remainRight;
        crossingPoint = i + 1;
    }
    
    passedDist += left[i];
    remainLeft -= left[i];
    remainRight -= right[i];
}

console.log(`${crossingPoint} ${minDist}`);