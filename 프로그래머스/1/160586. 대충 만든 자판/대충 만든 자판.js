function solution(keymap, targets) {
    const shortest = new Map();
    
    for (let key of keymap) {
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            
            if (shortest.has(char)) {
                const short = Math.min(shortest.get(char), i + 1);
                shortest.set(char, short);
            } else {
                shortest.set(char, i + 1);
            }
        }
    }
    console.log(shortest);
    
    const result = [];
    
    for (let target of targets) {
        let sum = 0;
        
        for (let t of target) {
            if (!shortest.has(t)) {
                sum = -1;
                break;
            }
            
            sum += shortest.get(t);
        }
        
        result.push(sum);
    }
    
    return result;
}