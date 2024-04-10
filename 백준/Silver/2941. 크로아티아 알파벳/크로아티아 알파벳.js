const str = require('fs').readFileSync(0, 'utf-8').toString().trim();
const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let memo = 0;
let answer = str.length;

for (let c of croatian) {
    const regex = new RegExp(c, 'g');
    const matches = str.match(regex);
    let count = matches ? matches.length : 0;
    
    if (c === 'dz=') memo = count;
    
    if (c === 'z=') {
        count -= memo;
    }
    
    answer -= count * (c === 'dz=' ? 2 : 1);
}

console.log(answer);