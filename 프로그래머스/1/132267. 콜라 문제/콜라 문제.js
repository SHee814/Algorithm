function solution(a, b, n) {
    let empty = n;
    let answer = 0;
    
    while (empty >= a) {
        const give = Math.floor(empty / a) * a;
        const take = Math.floor(empty / a) * b;
        answer += take;
        empty += take - give;
    }
    
    return answer;
}