import sys

nums = [int(x.rstrip()) for x in sys.stdin.readlines()]
check = [False for _ in range(30)]
res = []

for n in nums:
    check[n - 1] = True

for i, v in enumerate(check):
    if (not v):
        res.append(i+1)
        
print(f'{min(res)}\n{max(res)}')