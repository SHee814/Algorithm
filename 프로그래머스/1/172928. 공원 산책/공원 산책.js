function solution(park, routes) {
    const R = park.length;
    const C = park[0].length;
    let r = 0;
    let c = 0;
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    const dirIdxMap = {
        'N': 0,
        'E': 1,
        'S': 2,
        'W': 3,
    }
    
    while (park[r][c] !== 'S') {
        if (c < C - 1) {
            c++;
        } else {
            r++;
            c = 0;
        }
    }
    
    for (let route of routes) {
        const inst = route.split(' ');
        const dirIdx = dirIdxMap[inst[0]];
        const dist = +inst[1];
        let cr = r;
        let cc = c;
        let isValid = true;
        
        for (let i = 1; i <= dist; i++) {
            cr += dr[dirIdx];
            cc += dc[dirIdx];
            
            if (cr < 0 || cr >= R
                || cc < 0 || cc >= C
                || park[cr][cc] === 'X'
               ) {
                isValid = false;
                break;
            }
        }
        
        if (!isValid) continue;
        
        r = cr;
        c = cc;
    }
    
    return [r, c];
}