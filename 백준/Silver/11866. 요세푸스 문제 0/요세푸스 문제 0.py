from collections import deque

N, K = map(int, input().split())
Q = deque([str(x) for x in range(1,N+1)])
S = []

while Q:
    Q.rotate(-K+1)
    S.append(Q.popleft())

print(f"<{', '.join(S)}>")