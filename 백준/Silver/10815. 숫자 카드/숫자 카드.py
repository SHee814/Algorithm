N = int(input())
cards = set(input().split())
M = int(input())
Q = input().split()

for i in cards:
    cards.add(i)

print(' '.join(['1' if q in cards else '0' for q in Q]))