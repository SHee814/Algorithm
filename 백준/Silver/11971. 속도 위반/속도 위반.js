const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [N, M] = input[0];
const limitSpeedList = [];
const limitSectionList = [];
const drivenSpeedList = [];
const drivenSectionList = [];

for (let i = 1; i <= N; i++) {
    const [length, limit] = input[i];
    const start = (limitSectionList[limitSectionList.length - 1] || [0, 0])[1];
    const end = start + length;
    
    limitSpeedList.push(limit);
    limitSectionList.push([start, end]);
}

for (let i = N + 1; i <= N + M; i++) {
    const [length, speed] = input[i];
    const start = (drivenSectionList[drivenSectionList.length - 1] || [0, 0])[1];
    const end = start + length;
    
    drivenSpeedList.push(speed);
    drivenSectionList.push([start, end]);
}

function getDrivenLimitSection(ds, de) {
    const result = [];
    
    for (let i = 0; i < N; i++) {
        const [ls, le] = limitSectionList[i];
        
        if (de <= ls || le <= ds) continue;
        
        result.push(i);
    }
    
    return result;
}

let maxOverSpeed = 0;

for (let i = 0; i < M; i++) {
    const [ds, de] = drivenSectionList[i];
    const drivenLimitList = getDrivenLimitSection(ds, de).map(index => limitSpeedList[index]);
    const minLimit = drivenLimitList.reduce((acc, limit) => Math.min(acc, limit));
    const drivenSpeed = drivenSpeedList[i];
    const overSpeed = drivenSpeed - minLimit;
    maxOverSpeed = Math.max(maxOverSpeed, overSpeed);
}

console.log(maxOverSpeed);