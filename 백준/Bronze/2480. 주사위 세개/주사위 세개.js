const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let price;

if (a === b && b === c) {
    price = 10_000 + (a * 1_000);
} else if (a === b && b !== c) {
    price = 1_000 + (a * 100);
}  else if (b === c && c !== a) {
    price = 1_000 + (b * 100);
} else if (c === a && a !== b) {
    price = 1_000 + (c * 100);
} else {
    price = Math.max(a, b, c) * 100;
}

console.log(price);