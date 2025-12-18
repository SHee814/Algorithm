N = int(input())
M = sorted(map(int, input().split()))
t = 0

for i, m in enumerate(M):
    t += m * (N - i)
    
print(t)