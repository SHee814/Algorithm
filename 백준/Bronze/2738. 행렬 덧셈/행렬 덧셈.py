N, M = map(int, input().split())
A = [list(map(int, input().split())) for i in range(0, N)]
B = [list(map(int, input().split())) for i in range(0, N)]
C = []

for i in range(0, N):
    row = []
    
    for j in range(0, M):
        row.append(str(A[i][j] + B[i][j]))

    C.append(row)
    
print('\n'.join(map(lambda row: ' '.join(row), C)))