import sys

N, M = map(int, input().split())
A = []
B = []

for idx, line in enumerate(sys.stdin):
    row = list(map(int, line.rstrip().split()))
    
    if idx < N:
        A.append(row)
    else:
        B.append(row)

for i in range(N):
    row = []
    
    for j in range(M):
        row.append(A[i][j] + B[i][j])

    print(' '.join(map(str, row)))