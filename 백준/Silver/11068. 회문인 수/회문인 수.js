const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const T = input[0];

function convertBase(B, n) {
    const result = [];
    let num = n;
    
    while (num >= B) {
        result.push(num % B);
        num = Math.floor(num / B);
    }
    
    result.push(num);
    
    return result.reverse();
}

function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        if (arr[left++] !== arr[right--]) return false;
    }
    
    return true;
}

let answer = '';

for (let t = 1; t <= T; t++) {
    const n = input[t];
    let existPalindrome = false;
    
    for (let b = 2; b <= 64; b++) {
        if (isPalindrome(convertBase(b, n))) {
            existPalindrome = true;
            break;
        }
    }
    
    answer += `${existPalindrome ? 1 : 0}\n`;
}

console.log(answer);