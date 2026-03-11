import sys

T = int(input())

def recursion(count, S, l, r):
    if l >= r:
        return (1, count+1);
    elif S[l] != S[r]:
        return (0, count+1)
    else:
        return recursion(count+1, S, l+1, r-1)

for S in sys.stdin.read().splitlines():
    print(*recursion(0, S, 0, len(S)-1))