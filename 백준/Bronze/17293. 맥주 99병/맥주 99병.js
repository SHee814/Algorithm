const N = +require('fs').readFileSync(0, 'utf-8');
let answer = '';

for (let i = N; i > 0; i--) {
    answer += `${i} ${bottle(i)} of beer on the wall, ${i} ${bottle(i)} of beer.\n`;
    answer += `Take one down and pass it around, ${i - 1 || 'no more'} ${bottle(i - 1)} of beer on the wall.\n\n`;
}

answer += `No more bottles of beer on the wall, no more bottles of beer.\n`;
answer += `Go to the store and buy some more, ${N} ${bottle(N)} of beer on the wall.`
console.log(answer);

function bottle(x) {
    return x === 1 ? 'bottle' : 'bottles';
}