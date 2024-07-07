const fs = require('fs');
const nums = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').slice(1).map(Number);
console.log(nums.sort((a, b) => a - b).join('\n'));