import sys

N = int(input())
coords = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
sorted_coords = sorted(coords, key=lambda x: (x[0], x[1]))

print('\n'.join(map(lambda x: ' '.join(map(str, x)), sorted_coords)))