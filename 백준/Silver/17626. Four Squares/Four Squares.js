const N = +require('fs').readFileSync(0, 'utf-8');
const numSet = new Set();
const queue = [[N, 0]];
let index = 0;

while (index < queue.length) {
    const [r, l] = queue[index++];
    
    if (r === 0) {
        console.log(l);
        process.exit();
    };
    
    const underSquareRoot = Math.floor(Math.sqrt(r));
    
    for (let i = underSquareRoot; i > 0; i--) {
        const nr = r - (i ** 2);
        const nl = l + 1;
        
        if (numSet.has(nr)) continue;
        
        if (nr === 0) {
            console.log(nl);
            process.exit();
        }
        
        numSet.add(nr);
        
        if (nl === 4) continue;
        
        queue.push([nr, nl]);
    }
}