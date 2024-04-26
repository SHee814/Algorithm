const N = +require('fs').readFileSync(0, 'utf-8').toString().trim();
const nums = Array.from(Array(N + 1), (_, i) => i);

nums[0] = 0;
nums[1] = 0;

for (let n of nums) {
    if (n < 1) continue;
    
    let i = 2;
    
    while (n * i <= N) {
        nums[n * i] = 0;
        i++;
    }
}

const pn = nums.filter(x => x > 0);
let head = 0;
let tail = 0;
let sum = pn[0];
let count = 0;

while (head < pn.length && tail < pn.length) {
    if (sum < N) {
        sum += pn[++tail];
    } else {
        count += +(sum === N);
        sum -= pn[head++];
    }
}

console.log(count);