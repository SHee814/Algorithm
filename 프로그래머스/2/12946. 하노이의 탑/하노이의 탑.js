function solution(n) {
    const answer = [];
    
    move(1, 3, 2, n);
    
    return answer;
    
    function move(start, end, other, depth) {
        if (depth === 0) return;
        
        move(start, other, end, depth - 1);
        answer.push([start, end]);
        move(other, end, start, depth - 1);
    }
}