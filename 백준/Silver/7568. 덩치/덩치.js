const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const N = +input[0][0];
const ranking = new Array(N);

for (let i = 1; i <= N; i++) {
    const [weight, height] = input[i];
    let rank = 1;
    
    for (let j = 0; j <= N; j++) {
        const [weight2, height2] = input[j];
        
        if (weight < weight2 && height < height2) rank++;
    }
    
    ranking[i - 1] = rank;
}

console.log(ranking.join(' '));