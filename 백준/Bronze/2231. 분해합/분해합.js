const n = +require('fs').readFileSync(0, 'utf-8');
let answer = 0;

for (let i = 1; i < n; i++) {
    const splited = i.toString().split('').map(Number);
    const sum = i + splited.reduce((acc, x) => acc + x, 0);
    
    if (sum === n) {
        answer = i;
        break;
    }
}

console.log(answer);