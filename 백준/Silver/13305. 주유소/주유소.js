const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const dist = input[1].split(' ').map(BigInt);
const price = input[2].split(' ').map(BigInt);
let current = 0;
let cost = 0n;

while (current < N - 1) {
    let next = current + 1;
    let move = dist[current];
    
    while (next < N - 1 && price[next] >= price[current]) {
        move += dist[next];
        next++;
    }
    
    cost += price[current] * move;
    current = next;
}

console.log(String(cost));