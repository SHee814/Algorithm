function solution(answers) {
    const N = answers.length;
    const student1 = Array.from(new Array(N), (_, i) => {
        return (i % 5) + 1;
    });
    
    const student2 = Array.from(new Array(N), (_, i) => {
        const d = [1, 3, 4, 5];
        
        if (i % 2) {
            return d[((i - 1) / 2) % 4];
        } else {
            return 2;
        }
    });
    
    const student3 = Array.from(new Array(N), (_, i) => {
        const d = [3, 1, 2, 4, 5];
        
        return d[Math.floor(i / 2) % 5];
    });
    
    const score = [0, 0, 0];
    
    for (let i = 0; i < N; i++) {
        const answer = answers[i];
        
        if (answer === student1[i]) score[0]++;
        if (answer === student2[i]) score[1]++;
        if (answer === student3[i]) score[2]++;
    }
    
    const max = Math.max(...score);
    const winner = [];
    
    for (let i = 0; i < 3; i++) {
        if (score[i] === max) winner.push(i + 1);
    }
    
    return winner;
}