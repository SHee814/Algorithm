const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const T = input[0];
const dp = new Map();
let answer = '';

for (let t = 1; t <= T; t++) {
    const N = input[t];
    answer += `${fibonacci(N).join(' ')}\n`;
}

console.log(answer);

function fibonacci(x) {
        if (x === 0) return [1, 0];
        if (x === 1) return [0, 1];
        
        if (dp.get(x)) return dp.get(x);
        
        const result = [
            fibonacci(x - 2)[0] + fibonacci(x - 1)[0],
            fibonacci(x - 2)[1] + fibonacci(x - 1)[1]
        ];
        
        dp.set(x, result);
        
        return result;
}