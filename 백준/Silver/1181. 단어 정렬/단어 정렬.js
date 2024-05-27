const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const words = input.slice(1);
const words_unique = Array.from(new Set(words));

words_unique.sort((a, b) => {
    const lenA = a.length;
    const lenB = b.length;
    if (lenA === lenB) {
        let index = 0;
        
        while (index < Math.min(lenA, lenB)) {
            if (a.charCodeAt(index) === b.charCodeAt(index)) {
                index++;
                continue;
            }
            
            return a.charCodeAt(index) - b.charCodeAt(index);
        }
        
        return 0;
    }
    
    return a.length - b.length;
})

console.log(words_unique.join('\n'));