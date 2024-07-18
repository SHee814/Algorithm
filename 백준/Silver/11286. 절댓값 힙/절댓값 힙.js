const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = input[0];
const heap = [];
let answer = '';

for (let i = 1; i <= N; i++) {
    if (input[i] === 0) {
        answer += `${pop()}\n`;
    } else {
        insert(input[i]);
    }
}

console.log(answer);

function compare(i, j) {
    if (Math.abs(heap[i]) === Math.abs(heap[j])) {
        return heap[i] <= heap[j];
    }
    
    return Math.abs(heap[i]) <= Math.abs(heap[j]);
}
    
function swap(i, j) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
}
    
function insert(x) {
    heap.push(x);
        
    let current = heap.length - 1;
    let parent = Math.floor((current - 1) / 2);
        
    while (compare(current, parent)) {
        swap(current, parent);
        current = parent;
        parent = Math.floor((current - 1) / 2);
    }
}
    
function pop() {
    if (heap.length === 0) return 0;
        
    swap(0, heap.length - 1);
        
    const result = heap.pop();
        
    let current = 0;
    let left = current * 2 + 1;
    let right = current * 2 + 2;
        
    while (compare(left, current) || compare(right, current)) {
        if (right >= heap.length || compare(left, right)) {
            swap(current, left);
            current = left;
        } else {
            swap(current, right);
            current = right;
        }
            
        left = current * 2 + 1;
        right = current * 2 + 2;
    }
        
    return result;
}