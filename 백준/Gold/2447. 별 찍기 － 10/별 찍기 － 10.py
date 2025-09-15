N = int(input())
result = [[' ' for _ in range(N)] for _ in range(N)]

def star(i,j,size):
    result[i][j] = '*'
    
    step = int(size / 3)

    if size > 1:
        for di in range(3):
            for dj in range(3):
                if not (di == 1 and dj == 1):
                    star(i+(di*step),j+(dj*step),step)

star(0,0,N)

for idx in range(N):
    print(''.join(result[idx]))