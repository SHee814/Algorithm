function solution(triangle) {
    const limit = triangle.length;
    const triangle_sum = triangle.map((_, i) => new Array(i + 1).fill(0));
    triangle_sum[0][0] = triangle[0][0];
    
    for (let i = 1; i < limit; i++) {
        const row = triangle_sum[i];
        
        for (let j = 0; j < i + 1; j++) {
            const left = triangle_sum[i - 1][j - 1] ?? 0;
            const right = triangle_sum[i - 1][j] ?? 0;
            
            triangle_sum[i][j] = triangle[i][j] + Math.max(left, right);
        }
    }
    
    return Math.max(...triangle_sum[limit - 1]);
    
    
    
    return max;
}