T = int(input())

def gcd(p, q):
    while q > 0:
        p, q = q, p % q
        
    return p

for _ in range(T):
    a, b = map(int, input().split())

    print(a * b // gcd(a, b))