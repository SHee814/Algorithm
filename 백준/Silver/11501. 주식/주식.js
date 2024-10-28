const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let t = 1; t <= T * 2; t += 2) {
    const N = +input[t];
    const prices = input[t + 1].split(' ').map(Number);
    const maxPrice = new Array(N);
    let max = 0;
    
    for (let i = N - 1; i >= 0; i--) {
        max = Math.max(max, prices[i]);
        maxPrice[i] = max;
    }
    
    let profit = prices.reduce((acc, x, i) => acc + (maxPrice[i] - x), 0);
    
    answer += profit + '\n';
}

console.log(answer);