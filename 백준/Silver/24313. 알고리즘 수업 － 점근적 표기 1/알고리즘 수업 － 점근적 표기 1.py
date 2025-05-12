a, b = map(int, input().split())
c = int(input())
n = int(input())

print(1 if a <= c and a * n + b <= c * n else 0)