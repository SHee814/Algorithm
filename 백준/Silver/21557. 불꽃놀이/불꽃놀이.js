const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const stack_origin = input[1].split(' ').map(Number);
let min = Infinity;

function firework(stack) {
    if (stack.length === 2) {
        min = Math.min(min, Math.max(...stack));
        return;
    }
    
    for (let i = 1; i < stack.length - 1; i++) {
        const stack_used = stack.slice();
        stack_used[i - 1]--;
        stack_used[i + 1]--;
        stack_used[i] = 0;
        
        const stack_next = stack_used.filter((x, i) => {
            return (i === 0 || i === stack_used.length - 1 || x > 0);
        });
        
        firework(stack_next);
    }
}

firework(stack_origin);
console.log(min);