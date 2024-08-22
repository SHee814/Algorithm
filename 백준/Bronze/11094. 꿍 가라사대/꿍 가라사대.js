const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
let answer = '';

for (let i = 1; i <= N; i++) {
    const order = input[i];
    
    if (order.slice(0, 10) === 'Simon says') {
        answer += order.slice(10) + '\n';        
    }
}

console.log(answer);