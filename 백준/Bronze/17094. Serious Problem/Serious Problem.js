const [N, S] = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const count = [0, 0];

for (let s of S) {
    count[+(s === '2')]++;
}

if (count[0] > count[1]) {
    console.log('e');
} else if (count[0] < count[1]) {
    console.log('2');
} else {
    console.log('yee');
}