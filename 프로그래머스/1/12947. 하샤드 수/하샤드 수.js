function solution(x) {
    const divide = x.toString().split('').reduce((acc, x) => acc + +x, 0);
    
    return x % divide === 0;
}