const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');

input.shift();

let index = 0;
let command = '';

while (index < input[0].length) {
    let char = input[0][index];
    let match = true;
    
    for (let file of input) {
        if (file[index] !== char) {
            command += '?';
            match = false;
            break;
        }
    }
    
    if (match) command += char;
    
    index++;
}

console.log(command);