N = int(input())

for i in range(N):
    a = ' ' * (N - i - 1)
    b = '*' * (2 * i + 1)
    print(a + b)

for i in range(N - 1):
    a = ' ' * (i + 1)
    b = '*' * (2 * (N - i - 1) - 1)
    print(a + b)