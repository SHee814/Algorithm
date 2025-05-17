N = int(input())
cards = list(input().split())
M = int(input())
Q = input().split()
D = {}

for i in cards:
    D[i] = True

print(' '.join(['1' if q in D else '0' for q in Q]))