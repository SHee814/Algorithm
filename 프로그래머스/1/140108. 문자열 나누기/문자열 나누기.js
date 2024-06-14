function solution(s) {
    const splited = [];
    
    decompose(s);
    
    return splited.length;
    
    function decompose(str) {
        if (str.length < 1) return;
        
        const first = str[0];
        const count = [0, 0];
        
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            
            if (char === first) {
                count[0]++;
            } else {
                count[1]++;
            }
            
            if (count[0] === count[1]) {
                splited.push(str.slice(0, i + 1));
                decompose(str.slice(i + 1));
                
                return;
            }
        }
        
        splited.push(str);
    }
}