const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let index = 1;
let answer = '';

while (input[index]) {
    const n = +input[index];
    const clothes = input.slice(index + 1, index + 1 + n).map(x => x.split(' '));
    const category = new Map();
    
    for (let [name, type] of clothes) {
        category.set(type, (category.get(type) || 1) + 1);
    }
    
    let result = 1;
    
    for (let [type] of category) {
        result *= category.get(type);
    }
    
    answer += `${result - 1}\n`;
    index += n + 1;
}

console.log(answer);