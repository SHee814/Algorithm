const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const gears = input.slice(0, 4).map(g => g.split('').map(Number));
const K = +input[4];
const actions = input.slice(5).map(a => a.split(' ').map(Number));

function rotateGear(index, direction) {
    const target = gears[index];
    const nextState = target.map((_, i) => target[(i - direction + 8) % 8]);
    return nextState;
}

function rotateProcess(index, direction) {
    gears[index] = rotateGear(index, direction);
    rotated[index] = true;
    
    if (index > 0 && !rotated[index - 1] && gears[index - 1][2] !== gears[index][6]) {
        rotateProcess(index - 1, direction * -1);
    }
    
    if (index < 3 && !rotated[index + 1] && gears[index][2] !== gears[index + 1][6]) {
        rotateProcess(index + 1, direction * - 1);
    }
}

for (let action of actions) {
    const index = action[0] - 1;
    const direction = action[1];
    const rotated = new Array(4).fill(false);
    
    function rotateProcess(index, direction) {
        const currentState = gears[index].slice();
        gears[index] = rotateGear(index, direction);
        rotated[index] = true;
    
        if (index > 0 && !rotated[index - 1] && gears[index - 1][2] !== currentState[6]) {
            rotateProcess(index - 1, direction * -1);
        }
    
        if (index < 3 && !rotated[index + 1] && currentState[2] !== gears[index + 1][6]) {
            rotateProcess(index + 1, direction * - 1);
        }
    }
    
    rotateProcess(index, direction, rotated);
}

const answer = gears.reduce((acc, x, i) => acc + (x[0] * (2 ** i)), 0);

console.log(answer);