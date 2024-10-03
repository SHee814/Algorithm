const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N1, N2] = input[0].split(' ').map(Number);
const G1 = input[1].split('').reverse().join('');
const G2 = input[2];
const T = +input[3];
const order = new Array(N1).fill(1).concat(new Array(N2).fill(2));

for (let t = 0; t < T; t++) {
    for (let i = 1; i < (N1 + N2); i++) {
        if (order[i - 1] === 1 && order[i] === 2) {
            order[i - 1] = 2;
            order[i] = 1;
            i++;
        }
    }
}

let index1 = 0;
let index2 = 0;

for (let j = 0; j < (N1 + N2); j++) {
    if (order[j] === 1) {
        order[j] = G1[index1++];
    } else {
        order[j] = G2[index2++];
    }
}

console.log(order.join(''));