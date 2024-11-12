const N = +require('fs').readFileSync(0, 'utf-8');
const changes = [500, 100, 50, 10, 5, 1];
let money = 1000 - N;
let i = 0;
let answer = 0;

while (money > 0) {
    const change = changes[i++];
    
    answer += Math.floor(money / change);
    money %= change;
}

console.log(answer);