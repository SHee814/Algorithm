const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
let count = 0;

function merge_sort(left, right) {
    if (left < right) {
        let mid = parseInt((left + right) / 2);
        merge_sort(left, mid);
        merge_sort(mid + 1, right);
        merge(left, mid, right);
    }
}

function merge(left, mid, right) {
    const temp = [];
    let i = left;
    let j = mid + 1;
    let t = 1;
    
    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) {
            temp.push(nums[i++]);
        } else {
            temp.push(nums[j++]);
        }
    }
    
    while (i <= mid) {
        temp.push(nums[i++]);
    }
    
    while (j <= right) {
        temp.push(nums[j++]);
    }
    
    for (let i = 0; i < temp.length; i++) {
        nums[i + left] = temp[i];
        count++;
        
        if (count === K) {
            console.log(temp[i]);
            process.exit();
        }
    }
}

merge_sort(0, nums.length - 1);
console.log(-1);