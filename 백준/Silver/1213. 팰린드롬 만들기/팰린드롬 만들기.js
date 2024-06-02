const name = require('fs').readFileSync(0, 'utf-8').toString().trim();
const map = new Map();

for (let char of name) {
    if (map.has(char)) {
        map.set(char, map.get(char) + 1);
    } else {
        map.set(char, 1);
    }
}

let head = [];
let middle = '';

for (let [char, count] of map) {
    if (count % 2) {
        if (middle.length > 0) {
            console.log(`I'm Sorry Hansoo`);
            process.exit();
        }
        
        middle += char;
    }
    
    const half = parseInt(count / 2);
    
    for (let i = 0; i < half; i++) {
        head.push(char);
    }
}

head.sort();

const tail = head.slice().reverse();

console.log(head.join('') + middle + tail.join(''));