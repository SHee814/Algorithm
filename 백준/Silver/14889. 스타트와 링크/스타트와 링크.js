const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const S = input.slice(1).map(row => row.split(' ').map(Number));
const team = [[], []];
const sum = [0, 0];
let answer = Infinity;

assignTeam(1);
console.log(answer);

function assignTeam(num) {
    for (let i = 0; i < 2; i++) {
        const currentTeam = team[i];
        
        if (currentTeam.length < N / 2) {
            const dv = calculateAbility(currentTeam, num);
            currentTeam.push(num);
            sum[i] += dv;

            if (num === N) {
                const diff = Math.abs(sum[0] - sum[1]);
                answer = Math.min(diff, answer);
            } else {
                assignTeam(num + 1);
            }
            
            sum[i] -= dv;
            currentTeam.pop();
        }
    }
}

function calculateAbility(team, num) {
    let dv = 0;
    
    for (let n of team) {
        dv += S[num - 1][n - 1] + S[n - 1][num - 1];
    }

    return dv;
}