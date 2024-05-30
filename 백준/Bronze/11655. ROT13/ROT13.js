const S = require('fs').readFileSync(0, 'utf-8').toString();
let ROT13 = '';

for (let s of S) {
    const isEnglish = /[A-Za-z]/.test(s);
    
    if (!isEnglish) {
        ROT13 += s;
        continue;
    }
    
    const code = s.charCodeAt();
    const isUpperCase = s.toUpperCase() === s;
    const normalize = isUpperCase ? 65 : 97;
    const newS = String.fromCharCode(((code - normalize + 13) % 26) + normalize);
    ROT13 += newS;
}

console.log(ROT13);