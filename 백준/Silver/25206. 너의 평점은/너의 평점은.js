const fs = require('fs');
const subjects = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' '));
const gradeTable = {
    "A+": 4.5,
    "A0": 4,
    "B+": 3.5,
    "B0": 3,
    "C+": 2.5,
    "C0": 2,
    "D+": 1.5,
    "D0": 1,
    'F': 0
};
let totalCredit = 0;
let totalGrade = 0;

for (let [_, credit, grade] of subjects) {
    if (grade === 'P') continue;
    
    totalCredit += +credit;
    totalGrade += +credit * gradeTable[grade];
}

console.log(totalGrade / totalCredit);