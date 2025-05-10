N, K = map(int, input().split())
idx = 0

for i in range(N):
    if N % (i+1) == 0:
        idx += 1
    
    if idx == K:
        print(i+1)
        exit()

print(0)