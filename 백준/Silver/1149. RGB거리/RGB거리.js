const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const costs = input.slice(1).map(x => x.split(' ').map(Number));
const accCost = [costs[0]];

for (let i = 1; i < N; i++) {
    const currentAccCost = [0, 0, 0];
    
    currentAccCost[0] = Math.min(accCost[i - 1][1], accCost[i - 1][2]) + costs[i][0];
    currentAccCost[1] = Math.min(accCost[i - 1][0], accCost[i - 1][2]) + costs[i][1];
    currentAccCost[2] = Math.min(accCost[i - 1][0], accCost[i - 1][1]) + costs[i][2];
    
    accCost.push(currentAccCost);
}

console.log(Math.min(...accCost[N - 1]));