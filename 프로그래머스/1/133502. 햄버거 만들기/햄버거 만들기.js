function solution(ingredient) {
    const table = [];
    let count = 0;
    
    for (let i of ingredient) {
        table.push(i);
        
        if (table.length < 4) continue;
        
        let baseIndex = table.length - 4;
        
        if (table[baseIndex] === 1
            && table[baseIndex + 1] === 2
            && table[baseIndex + 2] === 3
            && table[baseIndex + 3] === 1) {
            for (let i = 0; i < 4; i++) {
                table.pop();
            }
            
            count++;
        }
    }
    
    return count;
}