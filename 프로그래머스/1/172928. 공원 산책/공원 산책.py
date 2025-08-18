def solution(park, routes):
    N = len(park)
    M = len(park[0])
    si = 0
    sj = 0
    D = { 'E': [0, 1], 'W': [0, -1], 'S': [1, 0], 'N': [-1, 0] }

    for i in range(N):
        for j in range(M):
            if (park[i][j] == 'S'):
                si = i
                sj = j
                
    for route in routes:
        op, n = route.split()
        ci = si
        cj = sj
        is_valid = True
        
        for _ in range(int(n)):
            ni = ci + D[op][0]
            nj = cj + D[op][1]
            
            if (ni < 0 or nj < 0 or ni >= N or nj >= M or park[ni][nj] == 'X'):
                is_valid = False
                break
                
            ci = ni
            cj = nj
            
        if is_valid:
            si = ci
            sj = cj
            
    return [si, sj]