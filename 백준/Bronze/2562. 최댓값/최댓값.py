import sys

nums = map(int, sys.stdin.readlines())
v = 0
idx = -1


for i, n in enumerate(nums):
    if n > v:
        idx = i
        v = n

print(f'{v}\n{idx + 1}')