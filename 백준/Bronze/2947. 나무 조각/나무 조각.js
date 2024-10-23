const nums = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
let answer = '';

while (true) {
    for (let i = 0; i <= 4; i++) {
        if (nums[i] > nums[i + 1]) {
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
            answer += `${nums.join(' ')}\n`;
        }
    }
    
    if (!nums.some((x, i) => x !== i + 1)) {
        break;
    }
}

console.log(answer);