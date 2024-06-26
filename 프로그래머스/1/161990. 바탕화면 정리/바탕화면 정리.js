function solution(wallpaper) {
    const R = wallpaper.length;
    const C = wallpaper[0].length;
    const files_row = [];
    const files_col = [];
    let fileCount = 0;
    
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (wallpaper[r][c] === '.') continue;

            fileCount++;
            files_row.push(r);
            files_col.push(c);
        }
    }
    
    files_col.sort((a, b) => a - b);
    
    return [
            files_row[0],
            files_col[0],
            files_row[fileCount - 1] + 1,
            files_col[fileCount - 1] + 1
           ];
}