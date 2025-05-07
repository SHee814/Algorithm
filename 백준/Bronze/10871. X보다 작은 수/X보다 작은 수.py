N, X = map(int, input().split())
nums = map(int, input().split())
res = []

for i in nums:
    if i < X:
        res.append(i)

print(' '.join(map(str, res)))