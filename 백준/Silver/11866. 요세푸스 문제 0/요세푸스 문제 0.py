N, K = map(int, input().split())
circle = [str(x) for x in range(1, N+1)]
seq = []
idx = K-1

while len(circle) > 0:
    while idx >= len(circle):
        idx -= len(circle)
        
    seq.append(circle.pop(idx))
    idx += K-1

print(f'<{", ".join(seq)}>')