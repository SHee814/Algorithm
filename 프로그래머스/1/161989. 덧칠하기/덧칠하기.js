function solution(n, m, section) {
    const set = new Set(section);
    let answer = 0;
    
    for (let left of section) {
        if (!set.has(left)) continue;
        
        for (let target = left; target < left + m; target++) {
            if (set.has(target)) set.delete(target);
        }
        
        answer++;
        
        if (set.size < 1) break;
    }
    
    return answer;
}