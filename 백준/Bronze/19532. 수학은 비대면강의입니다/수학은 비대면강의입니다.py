a, b, c, d, e, f = map(int, input().split())

for x in range(1000):
    for y in range(1000):
        dx = [x, -x, x, -x]
        dy = [y, y, -y, -y]
        
        for i in range(4):
            if (a * dx[i] + b * dy[i] == c) and (d * dx[i] + e * dy[i] == f):
                print(dx[i], dy[i])
                exit()