a, b, c = map(int, input().split())

if (a == b and b == c):
    print(10000 + a * 1000)
elif (a == b or b == c):
    print(1000 + b * 100)
elif (a == c):
    print(1000 + a * 100)
else:
    print(100 * max(a, b, c))