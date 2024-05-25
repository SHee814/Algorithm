const fs = require('fs');
const dots = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const setX = new Set();
const setY = new Set();

for (let [x, y] of dots) {
    if (setX.has(x)) {
        setX.delete(x);
    } else {
        setX.add(x);
    }
    
    if (setY.has(y)) {
        setY.delete(y);
    } else {
        setY.add(y);
    }
}

console.log(Array.from(setX)[0], Array.from(setY)[0]);