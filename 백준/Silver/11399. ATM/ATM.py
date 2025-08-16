N = int(input())
P = sorted(map(int, input().split()))
wait = [0 for _ in range(N)]
time = 0

for (i, t) in enumerate(wait):
    wait[i] += P[i] + wait[i-1]
    time += wait[i]
    
print(time)