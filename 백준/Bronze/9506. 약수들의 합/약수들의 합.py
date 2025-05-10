import sys

for line in sys.stdin:
    N = int(line.rstrip())
    factors = []
    
    if N < 0: break
    
    for i in range(N // 2 + 1):
        if N % (i + 1) == 0:
            factors.append(i + 1)
    
    if sum(factors) == N:
        print(f'{N} = {" + ".join(map(str, factors))}')
    else:
        print(f'{N} is NOT perfect.')