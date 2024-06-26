function solution(t, p) {
    const lenT = t.length;
    const lenP = p.length;
    const bigP = BigInt(p);
    let count = 0;
    
    for (let i = 0; i <= lenT - lenP; i++) {
        const str = BigInt(t.slice(i, i + lenP));
        
        if (str <= bigP) count++;
    }
    
    return count;
}