const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, type] = input[0].split(' ');
const player = new Set(input.slice(1)).size;
const least = { 'Y': 1, 'F': 2, 'O': 3 }[type];

if (player < least) {
    console.log(0);
} else {
    console.log(parseInt(player / least));
}