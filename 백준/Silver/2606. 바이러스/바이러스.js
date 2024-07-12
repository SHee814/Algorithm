const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const COM = +input[0];
const NET = +input[1];
const connections = input.slice(2).map(c => c.split(' ').map(Number));
const network = Array.from(new Array(COM + 1), () => []);
const infected = new Set();

for (let [s, e] of connections) {
    network[s].push(e);
    network[e].push(s);
}

infect(1);
console.log(infected.size - 1);

function infect(com) {
    infected.add(com);
    
    const nextTargetList = network[com];
    
    for (let target of nextTargetList) {
        if (infected.has(target)) continue;
        
        infect(target);
    }
}