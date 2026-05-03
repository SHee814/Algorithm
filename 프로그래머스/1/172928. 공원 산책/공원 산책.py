def solution(park, routes):
    H = len(park)
    W = len(park[0])
    park_map = []
    D = {
        "E": [0, 1],
        "W": [0, -1],
        "S": [1, 0],
        "N": [-1, 0]
    }
    
    for h in range(H):
        row = []
        for w in range(W):
            x = park[h][w]
            
            if x == 'S':
                ch, cw = h, w
            
            row.append(x)
        park_map.append(row)
    
    for route in routes:
        d, n = route.split()
        nh, nw = ch, cw
        
        for _ in range(int(n)):
            nh += D[d][0]
            nw += D[d][1]
            
            if (nh < 0 or nh >= H) or (nw < 0 or nw >= W) or park_map[nh][nw] == 'X':
                nh, nw = ch, cw
                break
            
        ch, cw = nh, nw
        
    return ch, cw
        