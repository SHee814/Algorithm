function solution(name, yearning, photo) {
    const answer = [];
    const N = name.length;
    const map = new Map();
    
    for (let i = 0; i < N; i++) {
        map.set(name[i], yearning[i]);
    }
    
    for (let p of photo) {
        let score = 0;
        
        for (let n of p) {
            score += map.get(n) || 0; 
        }
        
        answer.push(score);
    }
    
    return answer;
}