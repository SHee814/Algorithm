const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let answer = '';

function getWorkingTime(ih, im, is, eh, em, es) {
    let [wh, wm, ws] = [eh - ih, em - im, es - is];
    
    if (ws < 0) {
        ws += 60;
        wm--;
    }
    
    if (wm < 0) {
        wm += 60;
        wh--;
    }
    
    if (wh < 0) {
        wh += 24;
    }
    
    return [wh, wm, ws];
}

for (let i = 0; i < input.length; i++) {
    const [h, m, s] = getWorkingTime(...input[i].split(' ').map(Number));
    
    answer += `${h} ${m} ${s}\n`;
}

console.log(answer);