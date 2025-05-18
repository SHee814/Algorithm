a, b = map(int, input().split())
c, d = map(int, input().split())

def gcd(p, q):
    while q > 0:
        p, q = q, p % q

    return p

x, y = (a * d) + (c * b), b * d
g = gcd(x, y)
print(f'{x // g} {y // g}')