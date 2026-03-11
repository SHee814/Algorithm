import sys

def C(x):
    if x == 0: return '-'
    
    m = ' ' * (3**(x-1))
    return C(x-1) + m + C(x-1)

for n in sys.stdin.read().splitlines():
    print(C(int(n)))