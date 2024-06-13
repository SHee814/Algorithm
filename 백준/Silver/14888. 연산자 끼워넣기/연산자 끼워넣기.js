const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = input[0];
const nums = input[1].split(' ').map(Number);
const opers = input[2].split(' ').map(Number);
let [min, max] = [Infinity, -Infinity];

putOperator(0, nums[0]);
console.log(`${max}\n${min}`);

function putOperator(index, val) {
    if (index === nums.length - 1) {
        min = Math.min(min, val);
        max = Math.max(max, val);
        return;
    }

    for (let i = 0; i < 4; i++) {
        if (opers[i] > 0) {
            const nv = calculate(val, nums[index + 1], i);
            opers[i]--;
            putOperator(index + 1, nv);
            opers[i]++;
        }
    }
}

function calculate(a, b, type) {
    if (type === 0) {
        return a + b;
    } else if (type === 1) {
        return a - b;
    } else if (type === 2) {
        return a * b;
    } else {
        return parseInt(a / b);
    }
}