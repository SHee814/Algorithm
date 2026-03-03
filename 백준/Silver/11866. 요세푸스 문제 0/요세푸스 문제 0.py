N, K = map(int, input().split())
Q = [str(x) for x in range(1,N+1)]
S = []
idx = 0

while Q:
    idx = (idx + K-1) % len(Q)
    S.append(Q[idx])
    Q = Q[:idx] + Q[idx+1:]

print(f"<{', '.join(S)}>")