const str = require('fs').readFileSync(0, 'utf-8').toString();
const answer = [];
let index = 0;

while (index < str.length) {
    const slice = str.slice(index, index + 10);
    
    answer.push(slice);
    index += 10;
}

console.log(answer.join('\n'));