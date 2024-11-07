const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
let answer = '';

for (let i = 0; i < input.length - 1; i++) {
    const password = input[i];
    let condition_vowel = false;
    let condition_triple = true;
    let condition_double = true;
    
    for (let j = 0; j < password.length; j++) {
        const x = password[j];
        const y = password[j + 1];
        const z = password[j + 2];
        
        if (vowelSet.has(x)) {
            condition_vowel = true;
        }
        
        if (j < password.length - 1) {
            condition_double = condition_double && (x === 'e' || x === 'o' || x !== y);
        }
        
        if (j < password.length - 2) {
            condition_triple = (
                condition_triple &&
                !(vowelSet.has(x) === vowelSet.has(y) && vowelSet.has(y) === vowelSet.has(z))
            )
        }
    }
    
    const result = condition_vowel && condition_triple && condition_double;
    
    answer += `<${password}> is ${result ? '' : 'not '}acceptable.\n`;
}

console.log(answer);