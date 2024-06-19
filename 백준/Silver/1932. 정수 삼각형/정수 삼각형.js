const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const triangle = input.slice(1).map(x => x.split(' ').map(Number));
const triangle_acc = Array.from(new Array(N), (_, i) => new Array(i + 1));
triangle_acc[0][0] = triangle[0][0];

for (let i = 1; i < N; i++) {
    for (let j = 0; j <= i; j++) {
        const left = triangle_acc[i - 1][j - 1] || 0;
        const right = triangle_acc[i - 1][j] || 0;
        
        triangle_acc[i][j] = Math.max(left, right) + triangle[i][j];
    }
}

console.log(Math.max(...triangle_acc[N - 1]));