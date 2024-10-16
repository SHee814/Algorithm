const N = +require('fs').readFileSync(0, 'utf-8');
let answer = '';

for (let i = 0; i < 2 * N; i++) {
    const x = i % 2 ? ' ' : '*';
    const y = i % 2 ? '*' : ' ';
    
    let row = '';
    
    for (let j = 0; j < N; j++) {
        row += j % 2 === 0 ? x : y;    
    }
    
    row += '\n';
    answer += row;
}

console.log(answer);