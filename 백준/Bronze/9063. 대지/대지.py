N = int(input())

if N < 2:
    print(0)
    exit()

min_x = 10_000
min_y = 10_000
max_x = -10_000
max_y = -10_000

for _ in range(N):
    x, y = map(int, input().split())
    min_x = min(min_x, x)
    min_y = min(min_y, y)
    max_x = max(max_x, x)
    max_y = max(max_y, y)

print((max_x - min_x) * (max_y - min_y))