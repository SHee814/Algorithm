function solution(n) {
    let left = n;
    let right = n;
    let count = 0;
    
    makeBracket('');
    
    return count;
    
    function makeBracket(bracket) {
        if (left === 0 && right === 0) {
            count++;
            return;
        }
        
        if (left > 0) {
            left--;
            makeBracket(bracket + '(');
            left++;
        }
        
        if (left < right) {
            right--;
            makeBracket(bracket + ')');
            right++;
        }
    }
}