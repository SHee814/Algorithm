const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const results = input.slice(1).map(x => x.split(' ').map(Number));
let max = 0;

for (let [a, b, c] of results) {
    let price;
    
    if (a === b && b === c) {
        price = 10000 + (a * 1000);
    } else if (a === b) {
        price = 1000 + (a * 100);
    } else if (b === c) {
        price = 1000 + (b * 100);
    } else if (c === a) {
        price = 1000 + (c * 100);
    } else {
        price = Math.max(a, b, c) * 100;
    }
    
    max = Math.max(max, price);
}

console.log(max);