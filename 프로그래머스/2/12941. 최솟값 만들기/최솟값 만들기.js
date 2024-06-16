function solution(A,B){
    const A_sorted = A.sort((a, b) => a - b);
    const B_sorted = B.sort((a, b) => b - a);
    let acc = 0;

    for (let i = 0; i < A.length; i++) {
        acc += A_sorted[i] * B_sorted[i];
    }
    
    return acc;

}