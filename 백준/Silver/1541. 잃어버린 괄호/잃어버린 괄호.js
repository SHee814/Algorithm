const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const nums = [];
let temp = 0;
let add = 0;

for (let i of input) {
    if (isNaN(i)) {
        if (i === '+') {
            add += temp;
            temp = 0;
        } else {
            nums.push(temp + add);
            temp = 0;
            add = 0;
        }
        continue;
    }
    
    temp = temp * 10 + Number(i);
}

nums.push(temp + add);

const answer = nums.reduce((acc, x) => acc - x);
console.log(answer);