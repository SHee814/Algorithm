const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = input[0];

class Heap {
    constructor() {
        this.heap = [];
    }
    
    compare(i, j) {
        const heap = this.heap;
        
        if (Math.abs(heap[i]) === Math.abs(heap[j])) {
            return heap[i] <= heap[j];
        }
        
        return Math.abs(heap[i]) <= Math.abs(heap[j]);
    }
    
    swap(i, j) {
        const heap = this.heap;
        
        [heap[i], heap[j]] = [heap[j], heap[i]];
    }
    
    insert(x) {
        const heap = this.heap;
        heap.push(x);
        
        let current = heap.length - 1;
        let parent = Math.floor((current - 1) / 2);
        
        while (this.compare(current, parent)) {
            this.swap(current, parent);
            current = parent;
            parent = Math.floor((current - 1) / 2);
        }
    }
    
    pop() {
        const heap = this.heap;
        
        if (heap.length === 0) return 0;
        
        this.swap(0, heap.length - 1);
        
        const result = heap.pop();
        
        let current = 0;
        let left = current * 2 + 1;
        let right = current * 2 + 2;
        
        while (this.compare(left, current) || this.compare(right, current)) {
            if (right >= heap.length || this.compare(left, right)) {
                this.swap(current, left);
                current = left;
            } else {
                this.swap(current, right);
                current = right;
            }
            
            left = current * 2 + 1;
            right = current * 2 + 2;
        }
        
        return result;
    }
}

const heap = new Heap();
let answer = '';

for (let i = 1; i <= N; i++) {
    if (input[i] === 0) {
        answer += `${heap.pop()}\n`;
    } else {
        heap.insert(input[i]);
    }
}

console.log(answer);