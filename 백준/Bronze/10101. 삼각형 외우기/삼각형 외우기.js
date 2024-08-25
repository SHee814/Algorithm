const [a, b, c] = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

if (a + b + c !== 180) {
    console.log('Error');
} else if (a === b && b === c && c === a) {
    console.log('Equilateral');
} else if (a === b || b === c || c === a) {
    console.log('Isosceles');
} else {
    console.log('Scalene');
}