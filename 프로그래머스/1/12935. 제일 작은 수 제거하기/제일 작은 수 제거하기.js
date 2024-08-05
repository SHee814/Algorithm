function solution(arr) {
    if (arr.length === 1) return [-1];
    
    const min = Math.min(...arr);
    const index = arr.indexOf(min);

    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}