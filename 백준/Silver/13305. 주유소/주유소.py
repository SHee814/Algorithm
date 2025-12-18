N = int(input())
D = list(map(int, input().split()))
C = list(map(int, input().split()))
tc = 0
d = 0
ci = 0
ti = 0

while ci < N-1:
    while ci == ti or (ti < N-1 and C[ci] < C[ti]):
        d += D[ti]
        ti += 1

    tc += d * C[ci]
    d = 0
    ci = ti
    
print(tc)