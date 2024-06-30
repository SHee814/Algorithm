function solution(s, skip, index) {
    const str_code = s.split('').map(x => x.charCodeAt());
    const skip_code = new Set(skip.split('').map(x => x.charCodeAt()));
    let result = '';
    
    for (let cc of str_code) {
        let idx = index;
        
        while (idx > 0) {
            cc += (cc < 122) ? +1 : -25;
            
            if (!skip_code.has(cc)) idx--;
        }
        
        result += String.fromCharCode(cc);
    }
    
    return result;
}