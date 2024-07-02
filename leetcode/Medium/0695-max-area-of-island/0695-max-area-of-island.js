/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const M = grid.length;
    const N = grid[0].length;
    const visited = Array.from(new Array(M), () => new Array(N).fill(false));
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    let max = 0;

    for (let r = 0; r < M; r++) {
        for (let c = 0; c < N; c++) {
            if (grid[r][c] === 0 || visited[r][c]) continue;

            const area = checkArea(r, c);

            max = Math.max(max, area);
        }
    }

    return max;

    function checkArea(r, c) {
        let result = 1;

        visited[r][c] = true;

        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];

            if (nr < 0 || nr >= M || nc < 0 || nc >= N) continue;
            if (grid[nr][nc] === 0) continue;
            if (visited[nr][nc]) continue;

            result += checkArea(nr, nc);
        }

        return result;
    }
};