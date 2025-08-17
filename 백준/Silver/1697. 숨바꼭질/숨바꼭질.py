from collections import deque

N, K = map(int, input().split())
X = { N: 0 }
Q = deque([N])

while K not in X and len(Q) > 0:
    cx = Q.popleft()
    NX = [cx-1, cx+1, cx*2]

    for nx in NX:
        if (nx < 0 or nx >= 200000 or nx in X):
            continue

        X[nx] = X[cx]+1
        Q.append(nx)

print(X[K])