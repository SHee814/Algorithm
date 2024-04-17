const N  = +require('fs').readFileSync(0, 'utf-8').toString().trim();
const cards = Array.from(Array(N), (_, i) => i + 1);
let idx = 0;

while (idx < cards.length - 1) {
    idx++;
    
    if (idx === cards.length - 1) break;
    
    cards.push(cards[idx++]);
}

console.log(cards[idx]);