const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = input[0];
const array = input.slice(1);

function quickSort(arr) {
    if (arr.length < 2) return arr;
    
    const pivot = arr[0];
    const left = [];
    const right = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(array).join('\n'));