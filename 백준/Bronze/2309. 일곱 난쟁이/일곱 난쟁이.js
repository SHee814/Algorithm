const heights = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const sum = heights.reduce((acc, x) => acc + x, 0);

for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
        if (heights[i] + heights[j] === sum - 100) {
            const seven = heights.filter((_, idx) => idx !== i && idx !== j);
            
            console.log(seven.sort((a, b) => a - b).join('\n'));
            process.exit();
        }
    }
}