const N = +require('fs').readFileSync(0, 'utf-8').toString();
let K = 0;
let record = '';

move(1, 3, 2, N);
console.log(`${K}\n${record}`);

function move(start, end, other, depth) {
    if (depth === 0) return;
    
    move(start, other, end, depth - 1);
    K++;
    record += `${start} ${end}\n`;
    move(other, end, start, depth - 1);
}