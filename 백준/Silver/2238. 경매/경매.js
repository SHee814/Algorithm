const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [U, N] = input[0].split(' ').map(Number);
const offerList = input.slice(1).map(offer => offer.split(' ')).map(offer => [offer[0], +offer[1]]);
const offerCountMap = new Map();

for (let [_, price] of offerList) {
    offerCountMap.set(price, (offerCountMap.get(price) || 0) + 1);
}

const minOfferedPriceSet = new Set();
let minOfferedCount = Infinity;

for (let [price, offeredCount] of offerCountMap) {
    if (offeredCount < minOfferedCount) {
        minOfferedCount = offeredCount;
        minOfferedPriceSet.clear();
        minOfferedPriceSet.add(price);
        continue;
    }
    
    if (offeredCount === minOfferedCount) {
        minOfferedPriceSet.add(price);
    }
}

const validOfferList = offerList.filter(([name, price]) => minOfferedPriceSet.has(price));

validOfferList.sort((a, b) => a[1] - b[1]);

console.log(validOfferList[0].join(' '));