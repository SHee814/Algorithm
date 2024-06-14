function solution(s){
    const s_lowercase = s.toLowerCase();
    let p = 0;
    let y = 0;
    
    for (let i of s_lowercase) {
        if (i === 'p') p++;
        if (i === 'y') y++;
    }
    
    if (p === y) return true;
    
    return false;
}