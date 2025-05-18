a, b = map(int, input().split())

def gcd(p, q):
    while q > 0:
        p, q = q, p % q
    
    return p

print(a * b // gcd(a, b))