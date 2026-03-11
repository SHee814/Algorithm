N = int(input())
M = list(map(int, input().split()))
B = [i for i in range(1,N+1)]
idx = 0
result = []

while (len(B) > 1):
    x = B[idx]
    result.append(x)
    m = M[x-1]
    B = B[:idx] + B[idx+1:]
    
    if m > 0:
        idx = (idx+m-1) % len(B)
    else:
        idx = (idx - (-m % len(B)) + len(B)) % len(B)

result.append(B[0])
print(*result)