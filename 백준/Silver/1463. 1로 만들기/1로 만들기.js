const N = +require('fs').readFileSync(0, 'utf-8').toString();
const queue = [N];
const memo = new Map();
let index = 0;

while (index < queue.length) {
    const cx = queue[index++];
    const count = memo.get(cx) || 0;
    
    if (cx === 1) {
        console.log(count);
        process.exit();
    }
    
    let nx;
    
    if (cx % 3 === 0) {
        nx = cx / 3;
        queue.push(nx);
        memo.set(nx, Math.min(memo.get(nx) || count + 1));
    }
    
    if (cx % 2 === 0) {
        nx = cx / 2;
        queue.push(nx);
        memo.set(nx, Math.min(memo.get(nx) || count + 1));
    }
    
    nx = cx - 1;
    queue.push(nx);
    memo.set(nx, Math.min(memo.get(nx) || count + 1));
}