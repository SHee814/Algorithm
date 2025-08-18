def solution(wallpaper):
    lux = 50
    luy = 50
    rdx = 0
    rdy = 0
    
    for i in range(len(wallpaper)):
        for j in range(len(wallpaper[0])):
            if wallpaper[i][j] == '#':
                lux = min(lux, i)
                luy = min(luy, j)
                rdx = max(rdx, i)
                rdy = max(rdy, j)
                                
    return [lux, luy, rdx+1, rdy+1]