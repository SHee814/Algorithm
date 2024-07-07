const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
let isAscending = true;
let isDescending = true;

for (let i = 0; i < 7; i++) {
    if (input[i] >= input[i + 1]) isAscending = false;
    if (input[i] <= input[i + 1]) isDescending = false;
}

if (isAscending) {
    console.log('ascending');
} else if (isDescending) {
    console.log('descending');
} else {
    console.log('mixed');
}