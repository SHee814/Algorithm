const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(row => row.split(' '));
const middleGoalMap = new Map;
const dr = [0, 1, 0, -1];
const dc = [1, 0, -1, 0];
let [or, oc] = [0, 0];
let oDir = -1;

for (let i = 0; i < 8; i++) {
    const subGoals = [];
    let [ir, ic] = [or, oc];
    let iDir = -1;

    for (let j = 0; j < 8; j++) {
        subGoals.push(input[ir][ic]);
        
        if (j % 2 === 0) {
            iDir++;
        }
        
        [ir, ic] = [ir + dr[iDir], ic + dc[iDir]];
    }
    
    if (i % 2 === 0) {
        oDir++;
    }
    
    const middleGoal = input[or + 1][oc + 1];

    subGoals.sort();
    middleGoalMap.set(middleGoal, subGoals);
    
    [or, oc] = [or + 3 * (dr[oDir]), oc + 3 * (dc[oDir])];
}

const orderedMiddleGoals = [];

for (let [mg, _] of Array.from(middleGoalMap)) {
    orderedMiddleGoals.push(mg);
}

orderedMiddleGoals.sort();

let answer = '';

for (let i = 0; i < 8; i++) {
    const middleGoal = orderedMiddleGoals[i];
    const subGoals = middleGoalMap.get(middleGoal);
    
    answer += `#${i + 1}. ${middleGoal}\n`;
    
    for (let j = 0; j < 8; j++) {
        answer += `#${i + 1}-${j + 1}. ${subGoals[j]}\n`;
    }
}

console.log(answer);