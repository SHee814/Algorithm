const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const members = input.slice(1).map(x => x.split(' '));
console.log(members.sort((a, b) => +a[0] - +b[0]).map(x => x.join(' ')).join('\n'));