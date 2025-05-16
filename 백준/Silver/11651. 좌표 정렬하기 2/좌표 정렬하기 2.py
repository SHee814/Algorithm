N = int(input())
coords = []

for _ in range(N):
    x, y = map(int, input().split())
    coords.append([x, y])

coords.sort(key=lambda x: (x[1], x[0]))

for i in range(N):
    print(f'{coords[i][0]} {coords[i][1]}')