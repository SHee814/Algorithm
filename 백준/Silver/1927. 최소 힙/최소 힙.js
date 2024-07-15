const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = input[0];
const heap = [];
let answer = '';

for (let i = 1; i <= N; i++) {
    const x = input[i];
    
    if (x === 0) {
        answer += `${pop(x)}\n`;
    } else {
        insert(x);
    }
}

console.log(answer);

function insert(x) {
    heap.push(x);
    
    let current = heap.length - 1;
    let parent = Math.floor((current - 1) / 2);
    
    while (heap[parent] > heap[current]) {
        swap(parent, current);
        current = parent;
        parent = Math.floor((current - 1) / 2);
    }
}

function pop() {
    if (heap.length === 0) return 0;
    
    const result = heap[0];
    swap(0, heap.length - 1);
    heap.pop();
    
    let current = 0;
    let leftChild = current * 2 + 1;
    let rightChild = current * 2 + 2;
    
    while (heap[current] > heap[leftChild] || heap[current] > heap[rightChild]) {
        if (heap[leftChild] < heap[rightChild] || rightChild >= heap.length) {
            swap(current, leftChild);
            current = leftChild;
        } else {
            swap(current, rightChild);
            current = rightChild;
        }
        
        leftChild = current * 2 + 1;
        rightChild = current * 2 + 2;
    }
    
    return result;
}

function swap(p, q) {
    [heap[p], heap[q]] = [heap[q], heap[p]];
}