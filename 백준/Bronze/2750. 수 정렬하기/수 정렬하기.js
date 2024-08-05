const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
console.log(input.slice(1).sort((a, b) => a - b).join('\n'));