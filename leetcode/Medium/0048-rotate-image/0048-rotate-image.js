/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const N = matrix.length;
    const matrix_copy = Array.from(new Array(N), (_, i) => matrix[i].slice());

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            const val = matrix_copy[r][c];
            
            matrix[c][N - 1 - r] = val;
        }
    }

    return matrix;
};