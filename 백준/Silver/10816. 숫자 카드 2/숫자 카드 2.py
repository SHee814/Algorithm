N = int(input())
cards = {}
C = map(int, input().split())
M = int(input())
Q = map(int, input().split())

for x in C:
    cards[x] = cards.get(x, 0) + 1

print(' '.join([str(cards[q]) if q in cards else '0' for q in Q]))