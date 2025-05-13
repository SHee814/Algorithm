N = int(input())
min_cnt = N

for x in range(N // 3 + 1):
    for y in range(N // 5 + 1):
        if 3 * x + 5 * y == N:
            min_cnt = min(min_cnt, x + y)

print(min_cnt if min_cnt < N else -1)