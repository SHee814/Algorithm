const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = +input[0];
const nums = input.slice(1).sort((a, b) => a - b);

if (N === 1) {
    console.log(`${nums[0]}\n${nums[0]}\n${nums[0]}\n${0}`);
    process.exit();
}

const sum = nums.reduce((acc, x) => acc + x, 0);
const max = nums[N - 1];
const min = nums[0];
const countMap = new Map();

nums.forEach(x => {
    countMap.set(x, (countMap.get(x) || 0) + 1) ;
});

const sortedCount = Array
    .from(countMap)
    .sort((a, b) => b[1] === a[1] ? a[0] - b[0] : b[1] - a[1]);

const average = Math.round(sum / N);
const median = nums[(N - 1) / 2];
const mode = sortedCount[0][1] === sortedCount[1][1] ? sortedCount[1][0] : sortedCount[0][0];
const range = max - min;
console.log(`${average}\n${median}\n${mode}\n${range}`);