N = int(input())
side = 2

for _ in range(N):
    side += side - 1

print(side ** 2)