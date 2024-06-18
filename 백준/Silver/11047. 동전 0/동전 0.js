const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);
let money = K;
let answer = 0;

while (money > 0) {
    const coin = coins.pop();
    answer += parseInt(money / coin);
    money %= coin;
}

console.log(answer);