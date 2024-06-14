function solution(k, m, score) {
    const score_sorted = score.sort((a, b) => b - a);
    let index = 0;
    let profit = 0;
    
    while (m <= score.length - index) {
        const package = score_sorted.slice(index, index + m);
        index += m;
        profit += Math.min(...package) * m;
    }
    
    return profit;
}