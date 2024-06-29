function solution(n, lost, reserve) {
    const clothes = new Array(n).fill(1);
    
    for (let i of lost) {
        clothes[i - 1]--;
    }
    
    for (let j of reserve) {
        clothes[j - 1]++;
    }
    
    for (let k = 0; k < n; k++) {
        if (clothes[k] > 0) continue;
        if (k > 0 && clothes[k - 1] === 2) {
            clothes[k]++;
            clothes[k - 1]--;
        } else if (k < n - 1 && clothes[k + 1] === 2) {
            clothes[k]++;
            clothes[k + 1]--;
        }
    }
    
    console.log(clothes)
    
    return clothes.reduce((acc, x) => acc + (x > 0 ? 1 : 0), 0);
}