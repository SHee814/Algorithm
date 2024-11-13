const 입력 = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +입력[0];
let 총점 = 0;
let 총학점 = 0;

const 등급 = {
    "A+": 4.3, "A0": 4.0, "A-": 3.7,
    "B+": 3.3, "B0": 3.0, "B-": 2.7,
    "C+": 2.3, "C0": 2.0, "C-": 1.7,
    "D+": 1.3, "D0": 1.0, "D-": 0.7,
    "F": 0.0
};

for (let i = 1; i <= N; i++) {
    const [_, 학점, 성적] = 입력[i].split(' ');
    
    총점 += +학점 * 등급[성적];
    총학점 += +학점;
}

const 평균평점 = Math.round((총점 / 총학점) * 100) / 100;

console.log(평균평점.toFixed(2));