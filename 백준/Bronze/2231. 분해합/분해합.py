import sys

N = int(input())

for i in range(N):
    n = i
    v = i
    
    while n >= 10:
        v += n % 10
        n = n // 10
        
    v += n
    
    if v == N:
        print(i)
        sys.exit()
        
print(0)