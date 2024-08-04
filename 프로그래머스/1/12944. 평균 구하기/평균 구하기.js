function solution(arr) {
    return arr.reduce((acc, x) => acc + x, 0) / arr.length;
}