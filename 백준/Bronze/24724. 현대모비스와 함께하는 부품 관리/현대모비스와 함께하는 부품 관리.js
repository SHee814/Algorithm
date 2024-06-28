const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let result = '';

for (let t = 1; t <= T; t++) {
    result += `Material Management ${t}\nClassification ---- End!\n`;
}

console.log(result);