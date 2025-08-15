import sys

def cantor(s):
    ns = len(s)
    k = int(ns/3)
    
    if ns == 1:
        return s
    
    return cantor(s[0:k]) + (' '*k) + cantor(s[2*k:])

for line in sys.stdin.readlines():
    n = int(line)
    print(cantor(('-'*(3**n)).rstrip()))