const N = +require('fs').readFileSync(0, 'utf-8').toString();
let count = 0;

for (let i = 1; i <= N; i++) {
    const num_str = i.toString();
    const length = num_str.length;
    const sum1 = num_str.split('').reduce((acc, x) => acc + (+x), 0);
    const sum2 = (+num_str[0] + +num_str[length - 1]) * length / 2;
    
    if (sum1 === sum2) count++;
}

console.log(count);