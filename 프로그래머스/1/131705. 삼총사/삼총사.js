function solution(number) {
    const N = number.length;
    let answer = 0;
    
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            for (let k = j + 1; k < N; k++) {
                if (number[i] + number[j] + number[k] === 0) answer++;
            }
        }
    }
    
    return answer;
}