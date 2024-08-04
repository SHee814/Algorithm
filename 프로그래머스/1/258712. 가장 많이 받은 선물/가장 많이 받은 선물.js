function solution(friends, gifts) {
    const N = friends.length;
    const record = Array.from(new Array(N), () => new Array(N).fill(0));
    const indexMap = new Map();
    const giftIndex = new Array(N).fill(0);
    
    for (let i = 0; i < N; i++) {
        indexMap.set(friends[i], i);
    }
    
    for (let g of gifts) {
        const [give, take] = g.split(' ').map(x => indexMap.get(x));
        record[give][take]++;
        giftIndex[give]++;
        giftIndex[take]--;
    }
    
    let result = 0;
    
    for (let p = 0; p < N; p++) {
        let max = 0;
        
        for (let q = 0; q < N; q++) {
            const give = record[p][q];
            const take = record[q][p];
            
            if (give < take) continue;
            
            if (give > take) {
                max++;
                continue;
            }
            
            if (giftIndex[p] > giftIndex[q]) max++;
        }
        
        result = Math.max(result, max);
    }
    
    return result;
}