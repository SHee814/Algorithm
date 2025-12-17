import sys

N, K = map(int,input().split())
C = [int(x) for x in sys.stdin.readlines()]
count = 0
coin_idx = N-1

while coin_idx >= 0:
    coin = C[coin_idx]
    count += K // coin
    K = K % coin
    coin_idx -= 1
    
print(count)