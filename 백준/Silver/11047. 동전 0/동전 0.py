import sys

N, K = map(int, input().split())
coin = list(map(int, sys.stdin.readlines()))
idx = len(coin)-1
count = 0

while K > 0:
    count += K // coin[idx]
    K %= coin[idx]
    idx -= 1

print(count)