const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');
const nums = input[0].split(' ').map(Number);
const target = +input[1];
const pairs = [];

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if (i === j) continue;
        
        if (nums[i] + nums[j] === target) {
            pairs.push([Math.min(nums[i], nums[j]), Math.max(nums[i], nums[j])]);
        }
    }
}

pairs.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    }
    
    return a[0] - b[0];
});

const noDuplicate = [];

for (let i = 0; i < pairs.length; i++) {
    if (
        i === pairs.length - 1
        || pairs[i][0] !== pairs[i + 1][0]
        || pairs[i][1] !== pairs[i + 1][1]
    ) {
        noDuplicate.push(pairs[i].join(' '));
    }
}

if (noDuplicate.length > 0) console.log(`${noDuplicate.join('\n')}`);

console.log(noDuplicate.length);